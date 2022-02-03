import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, 
    Button, FormGroup, Form, Label, Input, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            subject:'',
            feedback: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }


    render() {
        return (
            <div className="container">
                {/* Breadcrumb */}
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem className="bc-prev"><Link to="/">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active className="text-danger bc-now">Contact</BreadcrumbItem>
                        </Breadcrumb>
                        <h1 className="text-center text-primary">Contact Us</h1>
                        <hr className="col-sm-8 my-0" />
                    </div>
                </div>
                {/* Contact Info */}
                <div className="row row-content pb-0 mb-4">
                    <div className="col-sm-7 text-primary">
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

                <div className="row row-content pt-0">
                    <div className="col-sm-6">
                        <h5 className="mb-0 mission-text"><u>Address:</u></h5>
                        <address className="text-primary address-info">
                            2124 W Heroes LN, Suite 99<br />
                            Fictitious City, NJ 01007<br />
                        </address>
                        <h5 className="mb-0 mission-text"><u>Hours:</u></h5>
                        <address className="text-primary address-info">
                            Monday - Friday<br />
                            9AM - 3PM<br />
                            Or call us.
                        </address>

                        <h5 className="mb-0 mission-text"><u>Phone & Email</u></h5>
                        <a role="button" className="btn btn-link p-0 address-info" href="tel:+19737774321"><i className="fa fa-phone" ></i> 1-973-777-4321</a><br />
                        <a role="button" className="btn btn-link p-0 address-info" href="mailto:info@healthcareheroes.org"><i className="fa fa-envelope-o" ></i> info@healthcareheroes.org</a>
                    </div>
                </div>
                
                <div className="row row-content">
                    <div className="col-12">
                        <h2>We want to hear from you!</h2>
                    </div>
                    {/* Form */}
                    <div className="col">
                        <Form onSubmit={this.handleSubmit} className="mission-text">
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="text" htmlFor="firstName" name="firstName" id="firstName" 
                                        className="contact-input"
                                        placeholder="First Name" 
                                        value={this.state.firstName} 
                                        onChange={this.handleInputChange} 
                                        required 
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="text" htmlFor="lastName"name="lastName" id="lastName" 
                                        className="contact-input"
                                        placeholder="Last Name" 
                                        value={this.state.lastName} 
                                        onChange={this.handleInputChange} 
                                        required 
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="tel" htmlFor="phonNum" name="phoneNum" id="phoneNum"
                                        className="contact-input" 
                                        placeholder="Phone Number" 
                                        value={this.state.phoneNum} 
                                        onChange={this.handleInputChange} 
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="email" htmlFor="email"name="email" id="email" 
                                        className="contact-input"
                                        placeholder="Email" 
                                        value={this.state.email} 
                                        onChange={this.handleInputChange} 
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={5} className="d-flex d-inline-flex">
                                    <FormGroup check className="pl-0 ">
                                        <div className="custom-control custom-checkbox d-flex d-inline-flex pl-0">
                                            <div className="d-flex text-primary mb-2 mb-md-0">
                                                May we contact you?
                                                <div className="custom-control custom-checkbox ml-2">
                                                    <Input type="checkbox" 
                                                        id="agree" 
                                                        name="agree" 
                                                        className="custom-control-input " 
                                                        checked={this.state.agree}
                                                        value={this.state.agree} 
                                                        onChange={this.handleInputChange}  
                                                    />
                                                    <Label check className="custom-control-label label-agree  mt-1" htmlFor="agree" />
                                                </div>
                                            </div>
                                        </div> 
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <Input type="select" name="contactType" 
                                        className="contact-input"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}
                                    >
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={4}>
                                    <Input type="select" name="subject"
                                        className="contact-input"
                                        value={this.state.subject}
                                        onChange={this.handleInputChange}
                                    >
                                        <option className="dropdown-item" >Subject...</option>
                                        <option className="dropdown-item" value="Volunteer">Volunteer</option>
                                        <option value="Community Partner">Community Partners</option>
                                        <option value="Sponsor An Event">Sponsor An Event</option>
                                        <option value="Other">Other</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="textarea" id="feedback" name="feedback" 
                                        className="contact-input"
                                        rows="12"
                                        value={this.state.feedback} 
                                        onChange={this.handleInputChange}>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={3}>
                                    <Button type="submit" color="primary" className="btn-feedback"> 
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;