/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import Buttons from './Buttons';
import Fade from 'react-reveal/Fade';

const required = (val) => val && val.length; 
const maxLength = len => (val) => !(val) || (val.length <= len); 
const minLength = len => (val) => (val) && (val.length >= len);
const isNumber = val => !isNaN(Number(+val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);

    }
    

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.handleReset();
    };

    handleReset(values) {
        this.setState({
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        });
    }
    
    render() {
        return (
            <div className="container ">
                <Row className="row-content">
                    <Col sm={12} className="">
                        <Fade bottom cascade>
                        <h2 className="text-primary">We want to hear from you!</h2>
                        </Fade>
                    </Col>
                    {/* Form */}
                    <Col sm={12} >
                        <Form model="contactForm" onSubmit={values => this.handleSubmit(values)} className="mission-text p-3 contact-form">
                            <Row className="form-group">
                                <Col md={12}>
                                    <Control.text model=".firstName" name="firstName" id="firstName" 
                                        className="contact-input form-control"
                                        placeholder="First Name" 
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors 
                                        className="d-inline-flex justify-content-start pl-2 text-danger errors"
                                        model=".firstName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: '  Must be at least 2 characters',
                                            maxLength: ' Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Control.text model=".lastName" name="lastName" id="lastName" 
                                        className="contact-input form-control"
                                        placeholder="Last Name" 
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors 
                                        className="d-inline-flex justify-content-start pl-2 text-danger errors"
                                        model=".lastName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Control.text model=".phoneNum" name="phoneNum" id="phoneNum"
                                        className="contact-input form-control" 
                                        placeholder="Phone Number" 
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}
                                    />
                                    <Errors 
                                        className="d-inline-flex justify-content-start pl-2 text-danger errors"
                                        model=".phoneNum"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 10 characters',
                                            maxLength: 'Must be 15 characters or less',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Control.text model=".email" name="email" id="email" 
                                        className="contact-input form-control"
                                        placeholder="Email" 
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors 
                                        className="d-inline-flex justify-content-start pl-2 text-danger errors"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                
                                <Col md={5}>
                                    <Control.select model=".contactType" name="contactType" 
                                        className="contact-input form-control"
                                    >
                                        <option>May we contact you?</option>
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                        <option>Phone or Email</option>
                                        <option>No</option>
                                        
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={5}>
                                    <Control.select model=".subject" name="subject"
                                        className="contact-input form-control"
                                    >
                                        <option >Subject...</option>
                                        <option value="Volunteer">Volunteer</option>
                                        <option value="Mission Sponsor">Mission Sponsor</option>
                                        <option value="Donations">Donations</option>
                                        <option value="Other">Other</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Control.textarea model=".feedback" id="feedback" name="feedback" 
                                        className="contact-input form-control"
                                        rows="12"
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={3}>
                                    <Buttons 
                                        type="submit" 
                                        color="primary"
                                        className="btn-feedback"
                                        btnText={"Send Feedback"}
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ContactForm;