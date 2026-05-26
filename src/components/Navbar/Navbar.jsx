import { Link } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import {ThemeContext} from '../../context/ThemeContext';

function Navbar(props) {
     const {isDarkMode, toggleTheme} = useContext(ThemeContext);

    return(
        <nav className="react-navbar">
            <div className='react-logo'>
                <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                    {props.logoTitle}
                </Link>
            </div>
            <ul className='react-navlinks'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <button onClick={toggleTheme} className='theme-toggle-btn'>
                        {isDarkMode ? "☀️ Light" : "🌙 Dark"}
                    </button>
                </li>
                <li>
                    <span className='nav-badge'>Likes : {props.countValue} ❤️</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;