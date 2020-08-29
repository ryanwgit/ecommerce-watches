import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        New English
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                                Home
                           </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                           </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/watches" className="nav-links" onClick={closeMobileMenu}>
                                Watches
                           </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/checkout" className="nav-links" onClick={closeMobileMenu}>
                                Checkout
                           </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">Home</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
