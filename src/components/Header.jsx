import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
    const [navigation, setNavigation] = useState(false);
    const toggleNav = () => setNavigation(!navigation);

    
    return (
        <React.Fragment>
            <Jumbotron fluid className='bg-primary'>
                <div className="container container-fluid">
                    <div className="row justify-content-center ">
                        <div className="col-sm-10 px-2 py-3 d-flex justify-content-around  align-items-center hd-text-hdlr">
                            <h1 className="mb-0 text-success header-text">Host a Healthcare Hero</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Navbar className="navbar navbar-expand-lg d-flex justify-content-end sticky-top text-light bg-primary">
                <div className="container justify-content-between">
                    <NavLink to="/home"><i className="fa fa-heartbeat text-success text-lg nav-logo" /></NavLink>
                    <NavbarToggler onClick={toggleNav} className="justify-content-end">
                        <i className="fa fa-bars fa-lg text-success nv-icon "/> 
                    </NavbarToggler>
                    <Collapse isOpen={navigation} navbar className="justify-content-end">
                        <Nav navbar className="ml-auto text-center text-light nav-text">
                            <NavItem className="nav-item">
                                <NavLink  onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="nav-link active" to="/home"> 
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="nav-link" to="/about"> 
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="nav-link" to="/contact"> 
                                    Contact
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="nav-link" to="/involved"> 
                                    Get Involved
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="btn btn-outline-light my-2 my-sm-0 nav-text nav-volunteer" id="vol-link" to="/volunteer"> 
                                    Volunteer
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;