import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div id='nav-bar'>
            <img src='/images/logo-transparent.png' alt='Logo with name, Lauren Johnson and retro floppy disk image' />
            <div id='nav-links'>
                <Link to='/'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}