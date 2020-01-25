import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// pages components
import AdminPage from './components/AdminPage';
import HomePage from './components/HomePage';
import ContactsPage from './components/ContactsPage';

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
        <Navigation />
        <main className="container">
          <Route path="/" exact component={HomePage} />
          <Route path="/contacts" exact component={ContactsPage} />
          <Route path="/admin" exact component={AdminPage} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;