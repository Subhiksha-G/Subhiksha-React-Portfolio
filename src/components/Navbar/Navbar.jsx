import './Navbar.css';

function Navbar(props) {
    return(
        <nav className="react-navbar">
            <div className='react-logo'>{props.logoTitle}</div>
            <ul className='react-navlinks'>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><span className='nav-badge'>Likes : {props.countValue} ❤️</span></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar