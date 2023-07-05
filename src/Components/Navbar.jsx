import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import '../styles/Navbar.css'

// Find a way to get the state for # of items in cart to update the number next to Cart tab

export default function Navbar({ cart }) {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>Site Name</Link>
      <ul>
        <CustomLink to='/shop'>Shop</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink to='/cart'>Cart<p>&nbsp;({cart.length})</p></CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to , children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  )
}