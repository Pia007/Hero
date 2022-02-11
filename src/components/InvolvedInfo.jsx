import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function InvolvedInfo() {
    return (
        <div className="row">
            <div className="col">
                  <Breadcrumb className="text-secondary">
                      <BreadcrumbItem className="bc-prev text-success"><Link to="/" className="text-success">Home</Link></BreadcrumbItem>
                      <BreadcrumbItem active className="bc-now text-secondary">Contact</BreadcrumbItem>
                  </Breadcrumb>
                  <h1 className="text-center text-primary">Contact Us</h1>
                  <hr className="col-sm-8 my-0" />
            </div>
        </div>
    );
}
export default InvolvedInfo;

