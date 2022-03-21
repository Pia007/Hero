import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink, useLocation  } from 'react-router-dom';
import HostHeader from './HostHeader';
import newLogo from '../images/new-logo.svg';


export const Header = () => {
    const [navigation, setNavigation] = useState(false);
    const toggleNav = () => setNavigation(!navigation);
    
    const RenderHostHeader= () => {
        const location = useLocation();
        return location.pathname === '/home' ? null : <HostHeader />;
    }

    return (
        <React.Fragment>
            <Navbar className='navbar navbar-expand-lg d-flex justify-content-end sticky-top text-light mynav' style={{zIndex: '5'}}>
                <div className='container justify-content-between'>
                    <div className='d-flex'>
                        <NavLink tag='link' to='/home' 
                            onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))}>
                                <img src={newLogo}  alt='logo' className=' text-lg nav-logo mt-1' />
                        </NavLink>
                        <RenderHostHeader />
                    </div>
                    <NavbarToggler onClick={toggleNav} className='justify-content-end'>
                        <i className='fa fa-bars fa-lg text-success nv-icon '/> 
                    </NavbarToggler>
                    <Collapse isOpen={navigation} navbar className='justify-content-end'>
                        <Nav navbar className='ml-auto text-center text-light '>
                            <NavItem>
                                <NavLink tag='link' onClick={() => (navigation ? setNavigation(!navigation) : setNavigation(navigation))} className='nav-link' to='/about'> 
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag='link' onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className='nav-link' to='/involved'> 
                                    Get Involved
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag='link' onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className='nav-link' to='/contact'> 
                                    Contact
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag='link' onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className='btn btn-outline-light my-2 my-sm-0 mx-sm-2 nav-text nav-volunteer' id='vol-link' to='/volunteersignup'> 
                                    Volunteer
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag='link' onClick={() => (navigation ? setNavigation(!navigation): setNavigation(navigation))} className='nav-link' to='/volunteerspotlight' > 
                                    Spotlight 
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