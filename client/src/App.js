import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <Route exact path="/" component={Landing}></Route>
          <div className="container">
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
