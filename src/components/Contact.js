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
                <div className="row row-content">
                    <div className="col-12">
                        <h2>We want to hear from you!</h2>
                    </div>
                    <div className="col">
                        <Form onSubmit={this.handleSubmit} className="mission-text">
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="text" name="firstName" id="firstName" 
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
                                    <Input type="text" name="lastName" id="lastName" 
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
                                    <Input type="tel" name="phoneNum" id="phoneNum"
                                        className="contact-input" 
                                        placeholder="Phone Number" 
                                        value={this.state.phoneNum} 
                                        onChange={this.handleInputChange} 
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="email" name="email" id="email" 
                                        className="contact-input"
                                        placeholder="Email" 
                                        value={this.state.email} 
                                        onChange={this.handleInputChange} 
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={6}>
                                    <FormGroup check>
                                        <Label>
                                            <Input type="checkbox" 
                                                name="agree"  
                                                className="custom-control custom-checkbox ml-2"
                                                checked={this.state.agree}
                                                value={this.state.agree} 
                                                onChange={this.handleInputChange} 
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col >
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
                                        <option>Select...</option>
                                        <option value="Volunteer">Volunteer</option>
                                        <option value="Cash Donations">Cash Donations</option>
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