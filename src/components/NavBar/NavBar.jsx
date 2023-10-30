import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
  
    return (
      <div id='nav-bar'>
        <img src='/images/logo.png' alt='Logo with name, Lauren Johnson' />
        <div className='menu-icon' onClick={toggleMenu}>
          <img src='/images/menu-bar.png' alt='Menu' />
        </div>
        {/* Render the individual links always */}
        <div id='nav-links'>
          <Link to='/'>About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/resume'>Resume</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        {/* Render the collapsible menu only when isOpen is true */}
        {isOpen && (
          <div id='nav-links' className={isOpen ? 'open' : ''}>
            <Link to='/' onClick={toggleMenu}>About</Link>
            <Link to='/projects' onClick={toggleMenu}>Projects</Link>
            <Link to='/resume' onClick={toggleMenu}>Resume</Link>
            <Link to='/contact' onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </div>
    )
}