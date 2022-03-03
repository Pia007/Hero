import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { CREDENTIALS } from '../shared/loginData';
import Buttons from './Buttons';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            credentials: CREDENTIALS
        };
    }
    
    render () {
        return (
            <div className="container">
                <Row className="row-content justify-content-center">
                    {/* <Col xs={12}>
                        <Fade bottom cascade>
                            <h2 className="text-primary">Join us!</h2>
                        </Fade>
                    </Col>
                        */}
                    {/* Form */}
                    <Col md={6}>
                        <Form  className="mission-text p-3 form">
                            <div className='text-center'>
                                <h2 className='text-primary mb-4'>
                                    Login
                                </h2>
                            </div>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="email" htmlFor="email"name="email" id="email" 
                                        className="contact-input"
                                        placeholder="Email" 
                                        value={this.state.email}
                                        // invalid={!!errors.email}
                                        // onBlur={this.handleBlur("email")} 
                                        // onChange={this.handleChange} 
                                    />
                                    {/* <FormFeedback className="errors pl-2">{errors.email}</FormFeedback> */}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="password" htmlFor="password" name="password" id="password" 
                                        className="contact-input mb-2"
                                        placeholder="Password" 
                                        value={this.state.password}
                                        // invalid={!!errors.email}
                                        // onBlur={this.handleBlur("email")} 
                                        // onChange={this.handleChange} 
                                    />
                                    {/* <FormFeedback className="errors pl-2">{errors.email}</FormFeedback> */}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12} className="d-flex justify-content-end">
                                    <Link
                                        btnText={"Cancel"}
                                        type="submit" 
                                        color="danger"
                                        className="shadow-md mr-3 btn btn-danger"
                                        to="/home"
                                    >
                                        Cancel
                                    </Link>
                                    <Buttons 
                                        btnText={"Login"}
                                        type="submit" 
                                        color="success"
                                        className="shadow-md "
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

export default LoginForm;