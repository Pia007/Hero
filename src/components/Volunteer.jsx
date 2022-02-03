import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, 
    Button, FormGroup, Form, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Volunteer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fName: '',
            lName: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            email: '',
            interests: '',
            touched: {
                fName: false,
                lName: false,
                address1: false,
                address2: false,
                city: false,
                state: false,
                zip: false,
                phone: false,
                email: false
            }
        }
    }
    return () {
        return (
            <div className="container">
                {/* Breadcrumb */}
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem className="bc-prev"><Link to="/">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active className="text-danger bc-now">Volunteer</BreadcrumbItem>
                        </Breadcrumb>
                        <h1 className="text-center text-primary">Volunteer</h1>
                        <hr className="col-sm-8 my-0" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Volunteer;