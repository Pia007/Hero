import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="site-footer footer-dark text-light" >
            <div className="container">
                <div className="row row-content ">
                    <div className="col-md-4 mb-4 text-center p-0">
                        <h3 className="text-light ft-heading"><u className="u-line">Address</u></h3>
                        <address className="tex-light ft-info">
                            2124 W Heroes LN, Suite 99<br />
                            Fictitious City, NJ 01007<br />
                        </address>
                        <h3 className="text-light ft-heading"><u className="u-line ">Phone & Email</u></h3>
                        <a role="button" className="btn btn-link p-0 text-light ft-info" href="tel:+19737774321">
                            <i className="fa fa-phone" /> 
                            {' '}1-973-777-4321
                        </a><br />
                        <a role="button" className="btn btn-link p-0 text-light ft-info" href="mailto:info@hostahealthcareheroes.org" >
                            <i className="fa fa-envelope-o" /> 
                            {' '}info@healthcareheroes.org
                        </a>
                    </div>
                    <div className="col-md-4 p-md-0">
                        <div className="col-sm-12 mx-auto mx-md-0 mb-4 p-xs-3 p-md-0 px-md-auto">
                            <h3 className="text-light text-center ft-heading"><u className="u-line">Info</u></h3>
                            <ul className="list-unstyled ft-info">
                                <li className="text-center "><Link className="active" to="/home">Home</Link></li>
                                <li className="text-center "><Link to="/about">About</Link></li>
                                <li className="text-center "><Link to="/contact">Contact</Link></li>
                                <li className="text-center "><Link to="/getInvolved">Get Involved</Link></li>
                                <li className="text-center "><Link to="/volunteer">Volunteer</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-4 p-0">
                        <div className="mb-3  text-center ">
                            <a className="btn btn-social-icon pt-md-0 pl-0" href="http://instagram.com/"><i className="fa fa-instagram text-light"></i></a>
                            <a className="btn btn-social-icon pt-md-0" href="http://facebook.com/"><i className="fa fa-facebook text-light"></i></a>
                            <a className="btn btn-social-icon pt-md-0" href="http://twitter.com/"><i className="fa fa-twitter text-light"></i></a>
                            <a className="btn btn-social-icon pt-md-0" href="http://youtube.com/"><i className="fa fa-youtube text-light"></i></a>
                        </div>
                        <p className="update-text mb-1 text-center footer-heading">
                            Sign up to receive news and updates.
                        </p>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-8 col-form-label mx-auto invisible" >Email</label>
                            <div className="col-8 mx-auto mb-0  d-flex justify-content-center">
                                <input type="email" className="form-control ft-input" id="email" name="email" placeholder="Email Address" /> 
                            </div>
                        </div>
                        <div className="form-group row mb-0 px-3">
                            <button className="btn btn-outline-light col-4 mx-auto ft-signup" type="submit">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="copyright text-center text-light">
                &copy; 2021 HOST A HEALTHCARE HERO 
            </p>
        </footer>
    );
}

export default Footer;