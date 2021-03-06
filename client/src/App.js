import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from "./Pages/Home"
import Superhero from "./Pages/Superhero"


import 'react-toastify/dist/ReactToastify.css'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />      
          <Route exact path="/api/superheroes/:_id" component={Superhero} />
        </div>
      </Router>
    )
  }
}

export default App