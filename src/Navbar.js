import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import Logo from './Logo'; // Import the Logo component

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Link to="home" smooth={true} duration={500}>Home</Link>
      <Link to="about" smooth={true} duration={500}>About</Link>
      <Link to="projects" smooth={true} duration={500}>Projects</Link>
      <Link to="contact" smooth={true} duration={500}>Contact</Link>
    </nav>
  );
}

export default Navbar;






