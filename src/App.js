import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Navigation/Header';
// import Footer from './Components/Navigation/Footer';
import Homepage from './Components/Pages/Homepage';
import './normalize.css';
import './reset.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Homepage}/>
          {/* <Footer/> */}
        </div>
      </Router>
    );
  }
}

export default App;
