import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class PageLayout extends Component {
  render () {
    return <div className='PageLayout'>
      <header>
        <div className='topnav'>
          <h1><NavLink to='/'>Pho Shizzle</NavLink></h1>
          <ul className='navlinks'>
            {/* <li><NavLink to='/'>Home</NavLink></li> */}
            <li><NavLink to='/menu'>Menu</NavLink></li>
            <li><NavLink to='/contactus'>Contact Us</NavLink></li>
            <li><NavLink to='/locations'>Locations</NavLink></li>
            <li><NavLink to='/order'>Order Online</NavLink></li>
          </ul>
        </div>
      </header>
      <footer>
        <p>&copy; 2017 Pho Shizzle. Built with &hearts; at The Iron Yard</p>
      </footer>
    </div>
  }
}

export default PageLayout
