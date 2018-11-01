import React, {
  Component
} from 'react';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
          <Landing></Landing>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;