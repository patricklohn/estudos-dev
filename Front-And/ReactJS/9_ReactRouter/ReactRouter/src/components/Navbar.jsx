import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
        {/* <Link to="/">Home</Link>
        <Link to="/contact">Contatos</Link> */}
        <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Menu</NavLink>
        <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>Contatos</NavLink>
    </div>
  )
}

export default Navbar