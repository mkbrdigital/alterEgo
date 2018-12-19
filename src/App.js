import React, { Component } from 'react';
import './App.css';
import Header from './Components/Navigation/Header';
// import Footer from './Components/Navigation/Footer';
import Homepage from './Components/Pages/Homepage';
import './normalize.css';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Homepage/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
