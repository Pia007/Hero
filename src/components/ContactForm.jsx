import React, { Component } from 'react';
import { Row, Col, FormGroup, Form, Input, FormFeedback } from 'reactstrap';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import Fade from 'react-reveal';
import Buttons from './Buttons';

const contactToastId = 'contact-toast-id';
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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        const regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.touched.email && !regEmail.test(email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    showToast = () => {
            toast.success(`Your message has been sent! We will get back to you shortly.`, {
                position: toast.POSITION.TOP_RIGHT,
                toastId: contactToastId,
            });
        
    };

    resetForm = () => {
        this.setState({
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
        });
    }

    handleSubmit = (event) => {
        // bypass Chrome Violation warning
        setTimeout(() => { 
            console.log('Current State is: ' + JSON.stringify(this.state));
            console.log('CONTACT FORM SUBMITTED!');
            this.resetForm();
        },2000);

        this.showToast();
        
        event.preventDefault();
    };

    render() {

        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);

        return (
            <div className="container text-primary">
                <Row className="row-content">
                    <Col md={12} >
                        <Fade bottom cascade>
                            <h2 className="text-sky">We want to hear from you!</h2>
                        </Fade>
                    </Col>
                    {/* Form */}
                    <Col md={12} >
                        <Form onSubmit={this.handleSubmit} tabIndex={1} className="mission-text p-3 form text-primary">
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="text" htmlFor="firstName" name="firstName" id="firstName"
                                        tabIndex={1} 
                                        className="contact-input "
                                        placeholder="First Name" 
                                        aria-label="First Name"
                                        value={this.state.firstName} 
                                        invalid={!!errors.firstName}
                                        onBlur={this.handleBlur("firstName")} 
                                        onChange={this.handleChange} 
                                        required 
                                    />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="text" htmlFor="lastName"name="lastName" id="lastName" 
                                        tabIndex={2}
                                        className="contact-input"
                                        placeholder="Last Name" 
                                        aria-label="Last Name"
                                        value={this.state.lastName} 
                                        invalid={!!errors.lastName}
                                        onBlur={this.handleBlur("lastName")} 
                                        onChange={this.handleChange} 
                                        required 
                                    />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="tel" htmlFor="phonNum" name="phoneNum" id="phoneNum"
                                        tabIndex={3}
                                        className="contact-input" 
                                        placeholder="Phone Number" 
                                        aria-label="Phone Number"
                                        value={this.state.phoneNum}
                                        invalid={!!errors.phoneNum} 
                                        onBlur={this.handleBlur("phoneNum")} 
                                        onChange={this.handleChange}
                                        required  
                                    />
                                    <FormFeedback>{errors.phoneNum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="email" htmlFor="email"name="email" id="email" 
                                        tabIndex={4}
                                        className="contact-input"
                                        placeholder="Email" 
                                        aria-label="Email"
                                        value={this.state.email}
                                        invalid={!!errors.email}
                                        onBlur={this.handleBlur("email")} 
                                        onChange={this.handleChange} 
                                        required 
                                    />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={5}>
                                    <Input type="select" name="contactType" 
                                        id="contactType"
                                        tabIndex={5}
                                        className="contact-input"
                                        value={this.state.contactType}
                                        onChange={this.handleChange}
                                    >
                                        <option className="option">May we contact you?</option>
                                        <option className="option" value='by phone'>By Phone</option>
                                        <option className="option" value='by email'>By Email</option>
                                        <option className="option" value='phone or email'>Phone or Email</option>
                                        <option className="option" value='no'>No</option>
                                        
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={5}>
                                    <Input type="select" name="subject"
                                        id="subject"
                                        tabIndex={6}
                                        className="contact-input "
                                        value={this.state.subject}
                                        onChange={this.handleChange}
                                    >
                                        <option className="option" >Subject...</option>
                                        <option className="option" value="Volunteer" >Volunteer</option>
                                        <option className="option" value="Community Partner" >Community Partners</option>
                                        <option className="option" value="Sponsor An Event">Sponsor An Event</option>
                                        <option className="option" value="Other">Other</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="textarea" htmlFor="feedback" id="feedback" name="feedback"
                                        tabIndex={7} 
                                        className="contact-input"
                                        aria-label="feedback"
                                        rows="12"
                                        value={this.state.feedback} 
                                        onChange={this.handleChange}>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={3}>
                                    <Buttons 
                                        type="submit" 
                                        color="primary" 
                                        className="btn-feedback shadow-lg"
                                        btntext={"Contact Us"}
                                    />
                                    <ToastContainer 
                                        theme='dark' 
                                        transition={Zoom} 
                                        autoClose={5000} 
                                        bodyClassName="home-bg" 
                                        toastClassName="home-bg" 
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