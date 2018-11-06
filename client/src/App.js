import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser  } from './actions/authActions';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import store from './store';

import './App.css';

// Check for token
if(localStorage.jwtToken){
   // set auth token header auth
   setAuthToken(localStorage.jwtToken);
   // decode token and get user info and experation
   const decoded = jwt_decode(localStorage.jwtToken);
   // set user and isAuthenticated
   store.dispatch(setCurrentUser(decoded));

   // check for expired token
   const currentTime = Date.now() / 1000;
   if(decoded.exp < currentTime) {
      // logut user
      store.dispatch(logoutUser());
      // TODO: clear current profile
      // Redirect to login
      window.location.href = '/login';
   }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
