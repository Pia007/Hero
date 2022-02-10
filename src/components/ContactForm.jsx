/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

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
    }
    

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    };
    
    render() {
        return (
            <div className="container ">
                <div className="row row-content">
                    <div className="col-12">
                        <h2 className="text-primary">We want to hear from you!</h2>
                    </div>
                    {/* Form */}
                    <div className="col bg-danger pt-3">
                        <LocalForm onSubmit={values => this.handleSubmit(values)} className="mission-text">
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
                                        className="text-danger"
                                        model=".firstName"
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
                                        className="text-danger"
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
                                        className="text-danger"
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
                                        className="text-danger"
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
                            {/* <Row className="form-group">
                                <div class="custom-control custom-checkbox ">
                                    <input type="checkbox" id="prep" name="prep" class="custom-control-input" />
                                    <label class="custom-control-label" for="prep">Preparation</label>
                                </div>
                            </Row> */}
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
                                        <option value="Community Partner">Community Partners</option>
                                        <option value="Sponsor An Event">Sponsor An Event</option>
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
                                    <Button type="submit" color="primary" className="btn-feedback"> 
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;