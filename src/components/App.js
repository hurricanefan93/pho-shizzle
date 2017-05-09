import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import PageLayout from './PageLayout'
import Menu from './Menu'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <div className='background' />
        <Route component={PageLayout} />
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
      </div>
    </Router>
  }
}

export default App
