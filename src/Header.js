import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link" style={{ color:"white"}} >Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link" style={{ color:"white"}} >About</Link></NavItem>
        <NavItem><Link to="/Profile" className="nav-link" style={{ color:"white"}} >Profile</Link></NavItem>
        <NavItem><LoginButton/></NavItem>
        <NavItem><LogoutButton/></NavItem>

        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
