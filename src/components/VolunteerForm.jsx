import React, { Component } from 'react';
import { FormGroup, Form, Label, Input, Col, FormFeedback } from 'reactstrap';
import Buttons from './Buttons';
import Fade from 'react-reveal/Fade';

class VolunteerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fName: '',
            lName: '',
            address1: '',
            address2: '',
            city: '',
            userState: '',
            zip: '',
            phone: '',
            email: '',
            food: false,
            health: false,
            personal: false,
            fitness: false,
            prep: false,
            fundraise: false,
            events: false,
            delivery: false,
            other: false,
            touched: {
                fName: false,
                lName: false,
                address1: false,
                city: false,
                userState: false,
                zip: false,
                phone: false,
                email: false
            }
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    validate(fName, lName, address1, city, userState, zip, phone, email) {
        const errors = {
            fName: '',
            lName: '',
            address1: '',
            city: '',
            userState: '',
            zip: '',
            phone: '',
            email: ''
        };

        if (this.state.touched.fName) {
            if (fName.length < 2) {
                errors.fName = 'First name must be at least 2 characters';
            } else if (fName.length > 15) {
                errors.fName = 'First name must be 15 or less characters';
            }
        }

        if (this.state.touched.lName) {
            if(lName.length < 2) {
                errors.lName = "Last name must be at least 2 characters";
            } else if(lName.length > 15){
                errors.lName = 'Last name must be 15 or less characters';
            }
        }

        const regAddress = /\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Way|Ave|Dr|Rd|Blvd|Ln|St|Wy)\.?/
        if(this.state.touched.address1 && !regAddress.test(address1)) {
            errors.address1 = 'Invalid address';
        }

        if(this.state.touched.city){
            if(city.length < 3){
                errors.city = 'City mush be at least 3 characters';
            } else if(city.length > 15) {
                errors.city = 'City must be 15 or less characters';
            }
        }
        
        if(this.state.touched.userState){
            if(userState.length < 2){
                errors.userState = 'State must be at least 2 characters';
            } else if(userState.length > 15) {
                errors.userState = 'State must be 15 or less characters';
            }
        }

        const regZip = /^\d{5}(?:[- ]?\d{4})?$/;
        if (this.state.touched.zip && !regZip.test(zip)) {
            errors.zip = 'Invalid zip code';
        }


        const regPhone = /^\d+$/;
        if (this.state.touched.phone && !regPhone.test(phone)) {
            errors.phone = 'The phone number should contain only numbers';
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
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    };

    render() {

        const errors = this.validate(this.state.fName, this.state.lName, this.state.address1, this.state.city, this.state.userState, this.state.zip, this.state.phone, this.state.email);

        return (
            <div className="container">
                <Fade bottom cascade>
                    <div className="row row-content">
                        <div className="col-12">
                            <h2 className="text-primary">Join us!</h2>
                        </div>
                        {/* Form */}
                        <div className="col">
                            <Form onSubmit={this.handleSubmit} className="mission-text p-3 volunteer-form">
                                <FormGroup row>
                                    <Col md={12}>
                                        <Input type="text" htmlFor="fName" name="fName" id="fName" 
                                            className="contact-input "
                                            placeholder="First Name" 
                                            value={this.state.fName} 
                                            invalid={errors.fName}
                                            onBlur={this.handleBlur("fName")} 
                                            onChange={this.handleInputChange} 
                                            required 
                                        />
                                        <FormFeedback className="errors pl-2">{errors.fName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={12}>
                                        <Input type="text" htmlFor="lName"name="lName" id="lName" 
                                            className="contact-input"
                                            placeholder="Last Name" 
                                            value={this.state.lName} 
                                            invalid={errors.lName}
                                            onBlur={this.handleBlur("lName")} 
                                            onChange={this.handleInputChange} 
                                            required 
                                        />
                                        <FormFeedback className="errors pl-2">{errors.lName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={12}>
                                        <Input type="text" htmlFor="address1"name="address1" id="address1" 
                                            className="contact-input"
                                            placeholder="Steet Address" 
                                            value={this.state.address1} 
                                            invalid={errors.address1}
                                            onBlur={this.handleBlur("address1")} 
                                            onChange={this.handleInputChange} 
                                            required 
                                        />
                                        <FormFeedback className="errors pl-2">{errors.address1}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                
                                <FormGroup row>
                                    <Col md={4} className="mb-3 mb-md-0">
                                        <Input type="text" htmlFor="city" name="city" id="city" 
                                            className="contact-input"
                                            placeholder="City" 
                                            value={this.state.city} 
                                            invalid={errors.city}
                                            onBlur={this.handleBlur("city")} 
                                            onChange={this.handleInputChange} 
                                            required 
                                        />
                                        <FormFeedback className="errors pl-2">{errors.city}</FormFeedback>
                                    </Col>
                                
                                    <Col md={4} className="mb-3 mb-md-0">
                                        <Input type="text" htmlFor="userState" name="userState" id="userState" 
                                            className="contact-input"
                                            placeholder="State" 
                                            value={this.state.userState}
                                            invalid={errors.userState}
                                            onBlur={this.handleBlur("userState")}
                                            onChange={this.handleInputChange} 
                                            required 
                                        />
                                        <FormFeedback className="errors pl-2">{errors.userState}</FormFeedback>
                                    </Col>
                                    <Col md={4} >
                                        <Input type="text" htmlFor="zip" name="zip" id="zip" 
                                            className="contact-input"
                                            placeholder="Postal Code" 
                                            value={this.state.zip} 
                                            invalid={errors.zip}
                                            onBlur={this.handleBlur("zip")} 
                                            onChange={this.handleInputChange} 
                                            required 
                                        />
                                        <FormFeedback className="errors pl-2">{errors.zip}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={6} className="mb-3 mb-md-0">
                                        <Input type="tel" htmlFor="phonNum" name="phone" id="phone"
                                            className="contact-input" 
                                            placeholder="Phone Number" 
                                            value={this.state.phone}
                                            invalid={errors.phone} 
                                            onBlur={this.handleBlur("phone")} 
                                            onChange={this.handleInputChange} 
                                        />
                                        <FormFeedback className="errors pl-2">{errors.phone}</FormFeedback>
                                    </Col>
                                    <Col md={6}>
                                        <Input type="email" htmlFor="email"name="email" id="email" 
                                            className="contact-input"
                                            placeholder="Email" 
                                            value={this.state.email}
                                            invalid={errors.email}
                                            onBlur={this.handleBlur("email")} 
                                            onChange={this.handleInputChange} 
                                        />
                                        <FormFeedback className="errors pl-2">{errors.email}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                
                                <FormGroup row >
                                    <div className="col text-primary mt-2">
                                        <strong className="mission-text "> Interests </strong>
                                        <FormGroup row>
                                            <Col xs={6} lg={3}>
                                                <FormGroup check className="custom-control custom-checkbox ">
                                                    <Input 
                                                        type="checkbox" 
                                                        id="food" 
                                                        name="food" 
                                                        className="custom-control-input "
                                                        checked={this.state.food}
                                                        value={this.state.food} 
                                                        onChange={this.handleInputChange}   
                                                    />
                                                    <Label check className="custom-control-label label-interests" htmlFor="food">Food Services</Label>
                                                </FormGroup>
                                                <FormGroup check className="custom-control custom-checkbox ">
                                                    <Input type="checkbox" 
                                                        id="health" 
                                                        name="health" 
                                                        className="custom-control-input" 
                                                        checked={this.state.health}
                                                        value={this.state.health} 
                                                        onChange={this.handleInputChange}   
                                                    />
                                                    <Label check className="custom-control-label label-interests" htmlFor="health">Health & Wellness</Label>
                                                </FormGroup>
                                            </Col>
                                            <Col xs={6} lg={3}>
                                                <FormGroup check className="custom-control custom-checkbox ">
                                                    <Input type="checkbox" 
                                                        id="personal" 
                                                        name="personal" 
                                                        className="custom-control-input" 
                                                        checked={this.state.personal}
                                                        value={this.state.personal} 
                                                        onChange={this.handleInputChange}  
                                                    />
                                                    <Label check className="custom-control-label label-interests" htmlFor="personal">Personal Care</Label>
                                                </FormGroup>
                                                <FormGroup check className="custom-control custom-checkbox ">
                                                    <Input type="checkbox" 
                                                        id="fitness" 
                                                        name="fitness" 
                                                        className="custom-control-input" 
                                                        checked={this.state.fitness}
                                                        value={this.state.fitness} 
                                                        onChange={this.handleInputChange}  
                                                    />
                                                    <Label check className="custom-control-label label-interests" htmlFor="fitness">Fitness</Label>
                                                </FormGroup>
                                            </Col>
                                            <Col xs={6} lg={3}>
                                                <FormGroup check className="custom-control custom-checkbox ">
                                                    <Input type="checkbox" 
                                                        id="fundraise" 
                                                        name="fundraise" 
                                                        className="custom-control-input" 
                                                        checked={this.state.fundraise}
                                                        value={this.state.fundraise} 
                                                        onChange={this.handleInputChange}  
                                                    />
                                                    <Label check className="custom-control-label label-interests" htmlFor="fundraise">Fundraising</Label>
                                                </FormGroup>

                                                <FormGroup check className="custom-control custom-checkbox ">
                                                    <Input type="checkbox" 
                                                        id="events" 
                                                        name="events" 
                                                        className="custom-control-input"
                                                        checked={this.state.events}
                                                        value={this.state.events} 
                                                        onChange={this.handleInputChange}   
                                                    />
                                                    <Label check className="custom-control-label label-interests" htmlFor="events">Events</Label>
                                                </FormGroup>
                                            </Col>
                                            <Col xs={6} lg={3}>
                                                <FormGroup check className="custom-control custom-checkbox ">
                                                    <Input type="checkbox" 
                                                        id="delivery" 
                                                        name="delivery" 
                                                        className="custom-control-input" 
                                                        checked={this.state.delivery}
                                                        value={this.state.de} 
                                                        onChange={this.handleInputChange}  
                                                    />
                                                    <label className="custom-control-label label-interests" htmlFor="delivery">Deliveries</label>
                                                </FormGroup>
                                                <FormGroup check className="custom-control custom-checkbox ">
                                                    <Input type="checkbox" 
                                                        id="other" name="other" 
                                                        className="custom-control-input" 
                                                        checked={this.state.other}
                                                        value={this.state.other} 
                                                        onChange={this.handleInputChange}  
                                                    />
                                                    <label className="custom-control-label label-interests" htmlFor="other">Other</label>
                                                </FormGroup>
                                            </Col>
                                        </FormGroup>
                                    </div>
                                </FormGroup>
                
                                <FormGroup row>
                                    <Col md={3}>
                                    <Buttons 
                                            type="submit" 
                                            color="primary"
                                            className="btn-feedback"
                                            btnText={"Volunteer"}
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default VolunteerForm;