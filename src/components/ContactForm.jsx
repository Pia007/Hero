import React, { Component } from 'react';
import { Row, Col, FormGroup, Form, Input, FormFeedback } from 'reactstrap';
import Fade from 'react-reveal';
import Buttons from './Buttons';

const newState = {
    firstName: '',
    lastName: '',
    phoneNum: '',
    email: '',
    agree: false,
    contactType: 'By Phone',
    subject:'',
    feedback: '',
    touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false
    }
}

class ContactForm extends Component {
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
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(firstName, lastName, phoneNum, email) {
        const errors = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: ''
        };
        
        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters';
            }
        }

        if (this.state.touched.lastName) {
            if(lastName.length < 2) {
                errors.lastName = "Last name must be at least 2 characters";
            } else if(lastName.length > 15){
                errors.lastName = 'Last name must be 15 or less characters';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'The email should contain @';
        }
        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
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
        // bypass Chrome Violation warning
        setTimeout(
            () => this.setState({...newState}), 
            console.log('Current State is: ' + JSON.stringify(this.state)),
            console.log('IT WORKED!'),
            alert('Current State is: ' + JSON.stringify(this.state)), 
        1000);
        
        event.preventDefault();
    };


    render() {

        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);

        return (
            <div className="container">
                <Row className="row-content">
                    <Col md={12} >
                        <Fade bottom cascade>
                            <h2 className="text-primary">We want to hear from you!</h2>
                        </Fade>
                    </Col>
                    {/* Form */}
                    <Col md={12} >
                        <Form onSubmit={this.handleSubmit} className="mission-text p-3 contact-form">
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="text" htmlFor="firstName" name="firstName" id="firstName" 
                                        className="contact-input "
                                        placeholder="First Name" 
                                        value={this.state.firstName} 
                                        invalid={!!errors.firstName}
                                        onBlur={this.handleBlur("firstName")} 
                                        onChange={this.handleInputChange} 
                                        required 
                                    />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="text" htmlFor="lastName"name="lastName" id="lastName" 
                                        className="contact-input"
                                        placeholder="Last Name" 
                                        value={this.state.lastName} 
                                        invalid={!!errors.lastName}
                                        onBlur={this.handleBlur("lastName")} 
                                        onChange={this.handleInputChange} 
                                        required 
                                    />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="tel" htmlFor="phonNum" name="phoneNum" id="phoneNum"
                                        className="contact-input" 
                                        placeholder="Phone Number" 
                                        value={this.state.phoneNum}
                                        invalid={!!errors.phoneNum} 
                                        onBlur={this.handleBlur("phoneNum")} 
                                        onChange={this.handleInputChange}
                                        required  
                                    />
                                    <FormFeedback>{errors.phoneNum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="email" htmlFor="email"name="email" id="email" 
                                        className="contact-input"
                                        placeholder="Email" 
                                        value={this.state.email}
                                        invalid={!!errors.email}
                                        onBlur={this.handleBlur("email")} 
                                        onChange={this.handleInputChange} 
                                        required 
                                    />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={5}>
                                    <Input type="select" name="contactType" 
                                        className="contact-input"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}
                                    >
                                        <option >May we contact you?</option>
                                        <option value='by phone'>By Phone</option>
                                        <option value='by email'>By Email</option>
                                        <option value='phone or email'>Phone or Email</option>
                                        <option value='no'>No</option>
                                        
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={5}>
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
                                    <Buttons 
                                        type="submit" 
                                        color="primary" 
                                        className="btn-feedback shadow-lg"
                                        btnText={"Volunteer"} 
                                    /> 
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ContactForm;