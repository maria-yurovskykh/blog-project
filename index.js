require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const path = require("path");
const session = require("express-session");


const {
  ExpressOIDC
} = require("@okta/oidc-middleware");

const Sequelize = require('sequelize');

const epilogue = require('epilogue')

const ForbiddenError = epilogue.Errors.ForbiddenError;

const app = express();

// Session support is required to use ExpressOIDC
app.use(session({
  secret: process.env.RANDOM_SECRET_WORD,
  resave: true,
  saveUninitialized: false
}));

const oidc = new ExpressOIDC({
  issuer: `${process.env.OKTA_ORG_URL}/oauth2/default`,
  client_id: process.env.OKTA_CLIENT_ID,
  client_secret: process.env.OKTA_CLIENT_SECRET,
  appBaseUrl: process.env.BASE_URL,
  redirect_uri: process.env.REDIRECT_URL,
  scope: "openid profile",
  routes: {
    loginCallback: {
      path: "/authorization-code/callback",
      afterCallback: "/admin"
    }
  }
});

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, './public/home.html'));
});

app.get('/admin', oidc.ensureAuthenticated(), (req, res) => {
  res.sendFile(path.join(__dirname, './public/admin.html'));
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/home');
});

app.get('/', (req, res) => {
  res.redirect('/home');
});

const database = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
  operatorsAliases: false,
});

const Post = database.define('posts', {
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
});

epilogue.initialize({ app, sequelize: database });

const PostResource = epilogue.resource({
  model: Post,
  endpoints: ['/posts', '/posts/:id'],
});

PostResource.all.auth((req, res, context) => {
  return new Promise((resolve, reject) => {
    // if (!req.isAuthenticated()) {
    //   res.status(401).send({ message: "Unauthorized" });
    //   resolve(context.stop);
    // } else {
    //   resolve(context.continue);
    // }
    resolve(context.continue);
  });
});

database
  .sync()
  .then(() => {
    oidc.on('ready', () => {
      app.listen(process.env.PORT, () => console.log(`Blog application is listening on port ${process.env.PORT}!`));
    });
  });

oidc.on('error', err => {
  // An error occurred while setting up OIDC
  console.log("oidc error: ", err);
});
