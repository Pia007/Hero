import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ContactInfo(props) {
    return (
        <div >
            <div className="row">
                <div className="col">
                    <Breadcrumb className="text-secondary">
                        <BreadcrumbItem className="bc-prev text-secondary"><Link to="/" className="text-secondary">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active className="bc-now text-success">Contact</BreadcrumbItem>
                    </Breadcrumb>
                    <h1 className="text-center text-primary">Contact Us</h1>
                    <hr className="col-sm-8 my-0" />
                </div>
            </div>
            {/* Contact Info */}
            <div className="row row-content pb-0 mb-4">
                <div className="col-12 col-md-7 text-primary">
                    <p className="mission-text"><strong>Host A Healthcare Hero</strong> relies heavily on the strength of community partners and
                        volunteers to provide healthcare heroes with appreciative care.
                    </p>
                    <p className="mission-text">
                        Please complete the contact form below and we will get back to you as soon as possible.
                    </p>
                    <p className="mission-text">
                        Thank you for your interest in Host A Healthcare Hero!
                    </p>
                    <p className="mission-text">
                        Lorem ipsum, Executive Director
                    </p>
                </div>
            </div>

            <div className="row row-content p-0">
                <div className="col-sm-6">
                    <h5 className="mb-0 mission-text"><u className="text-primary">Address:</u></h5>
                    <address className="text-primary address-info">
                        2124 W Heroes LN, Suite 99<br />
                        Fictitious City, NJ 01007<br />
                    </address>
                    <h5 className="mb-0 mission-text"><u className="text-primary">Hours:</u></h5>
                    <address className="text-primary address-info">
                        Monday - Friday<br />
                        9AM - 3PM<br />
                        Or call us.
                    </address>

                    <h5 className="mb-0 mission-text"><u className="text-primary">Phone & Email</u></h5>
                    <a role="button" className="btn btn-link text-primary p-0 address-info" href="tel:+19737774321"><i className="fa fa-phone" ></i> 1-973-777-4321</a><br />
                    <a role="button" className="btn btn-link text-primary p-0 address-info" href="mailto:info@healthcareheroes.org"><i className="fa fa-envelope-o" ></i> info@healthcareheroes.org</a>
                </div>
            </div>
        </div>
    
    );
}

export default ContactInfo;