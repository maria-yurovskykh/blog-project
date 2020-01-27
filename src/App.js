import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from 'react-router-dom';

// pages components
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import PhotoPage from './components/PhotoPage';
import ContactsPage from './components/ContactsPage';
import AdminPage from './components/AdminPage';

// smaller components
import Footer from './components/shared/Footer';
import Navigation from './components/shared/Navigation';

// import MapContainer from './components/MapContainer';

// styling
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navigation />
          <main className="container">
            <Route path="/" exact component={HomePage} />
            <Route path="/blog" exact component={BlogPage} />
            <Route path="/gallery" exact component={PhotoPage} />
            <Route path="/contacts" exact component={ContactsPage} />
            <Route path="/admin" exact component={AdminPage} />
          </main>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
