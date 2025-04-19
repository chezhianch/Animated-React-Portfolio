import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className='nav-links'>
      <div class="navbar-brand">
      
    <span class="portfolio-text">Portfolio</span>
  </div>
       <div className='align'>
       <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
       </div>
       
            

      </ul>
    </nav>
  );
};

export default Navbar;
