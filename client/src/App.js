import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from "./Pages/Home"
import Superhero from "./Pages/Superhero"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from './api';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />      
          <Route exact path="/api/superheroes/:_id" component={Superhero} />
        </div>
        {/* <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
      </Router>
    )
  }
}

export default App