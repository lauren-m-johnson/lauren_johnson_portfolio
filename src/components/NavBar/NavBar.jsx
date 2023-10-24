import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div id='nav-bar'>
            <img src='' alt='logo' id='logo-nav' />
            <div id='nav-links'>
                <Link to='/'>About</Link>
                <Link to='/services'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}