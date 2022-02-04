import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb className="text-secondary">
                        <BreadcrumbItem className="bc-prev text-secondary"><Link to="/" className="text-secondary">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active className="bc-now text-success">About</BreadcrumbItem>
                    </Breadcrumb>
                    <h1 className="text-center text-primary">About Us</h1>
                    <hr className="col-sm-8 my-0" />
                </div>
            </div>
        </div>
    );
}

export default About;