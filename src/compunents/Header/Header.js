import React from 'react';
import logo from '../../ICON/logo2.png';
import '../Header/Header.css';
import { NavbarBrand, NavLink, Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="navbar">
            <NavbarBrand href="#home"><img src={logo} alt="" /></NavbarBrand>
                <Nav className="ml-auto">
                    <NavLink href="/cart" className="button"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
                    <NavLink href="/login" className="button">Login</NavLink>
                    <NavLink href="/signup" className="button">Sign up</NavLink>
                </Nav>
            
        </div>
    );
};

export default Header;