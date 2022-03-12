import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink, useLocation  } from 'react-router-dom';
import HostHeader from './HostHeader';
import newLogo from '../images/new-logo.svg';


export const Header = (props) => {
    const [navigation, setNavigation] = useState(false);
    const toggleNav = () => setNavigation(!navigation);
    
    const RenderHostHeader= () => {
        const location = useLocation();
        return location.pathname === '/home' ? null : <HostHeader />;
    }

    return (
        <React.Fragment>
            
            <Navbar className="navbar navbar-expand-lg d-flex justify-content-end sticky-top text-light bg-primary">
                <div className="container justify-content-between">
                    <div className='d-flex'>
                        <NavLink to="/home"><img src={newLogo}  alt="logo" className=" text-lg nav-logo mt-1" /></NavLink>
                        <RenderHostHeader />
                    </div>
                    <NavbarToggler onClick={toggleNav} className="justify-content-end">
                        <i className="fa fa-bars fa-lg text-success nv-icon "/> 
                    </NavbarToggler>
                    <Collapse isOpen={navigation} navbar className="justify-content-end">
                        <Nav navbar className="ml-auto text-center text-light nav-text">
                            {/* <NavItem className="nav-item">
                                <NavLink  onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="nav-link active" to="/home"> 
                                    Home
                                </NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="nav-link" to="/about"> 
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="nav-link" to="/involved"> 
                                    Get Involved
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="nav-link" to="/contact"> 
                                    Contact
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="btn btn-outline-light my-2 my-sm-0 mx-sm-2 nav-text nav-volunteer" id="vol-link" to="/volunteersignup"> 
                                    Volunteer
                                </NavLink>
                            </NavItem>
                            <div>
                                <NavItem>
                                    <NavLink  onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className="nav-link" to="/volunteers" > 
                                        Spotlight 
                                    </NavLink>
                                </NavItem>
                            </div>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;