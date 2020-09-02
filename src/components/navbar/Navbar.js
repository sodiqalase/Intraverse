import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'

function Navbar() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation-right">
        <Logo />
      </Link>
      <Link className="navigation-left" to="/login">login</Link>
    </nav>
  )
}

export default Navbar
