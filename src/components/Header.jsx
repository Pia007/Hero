import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavbarBrand, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    closeNav() {
        if (this.state.isNavOpen) {
            this.setState({
                isNavOpen: false
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid className='bg-primary'>
                    <div className="container container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-sm-10 px-2 py-3 d-flex justify-content-around  align-items-center hd-text-hdlr">
                                {/* <span className="text-center header-text">
                                    <Link className="text-center text-light" to="/" >
                                        <i className="fa fa-heartbeat hdr-icon-link text-success"></i>
                                    </Link>
                                </span> */}
                                <h1 className="mb-0 text-center text-success header-text">Host a Healthcare Hero</h1>
                                {/* <span className="text-center header-text">
                                    <Link className="text-center text-light" to="/" >
                                        <i className="fa fa-heartbeat hdr-icon-link text-success"></i>
                                    </Link>
                                </span> */}
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar className="navbar navbar-expand-lg d-flex justify-content-end sticky-top text-light bg-primary">
                    <div className="container justify-content-between">
                        <NavbarBrand>
                            <i className="fa fa-heartbeat text-success text-lg nav-logo" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} className="justify-content-end">
                            <i className="fa fa-bars fa-lg text-success nv-icon "/> 
                        </NavbarToggler>
                        <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-end">
                            <Nav navbar className="ml-auto text-center text-light nav-text">
                                <NavItem className="nav-item">
                                    <NavLink onClick={this.closeNav} className="nav-link" to="/home"> 
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.closeNav} className="nav-link" to="/about"> 
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.closeNav} className="nav-link" to="/contact"> 
                                        Contact
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.closeNav} className="nav-link" to="/involved"> 
                                        Get Involved
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.closeNav} className="btn btn-outline-light my-2 my-sm-0  nav-text nav-volunteer" to="/volunteer"> 
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
}

export default Header;