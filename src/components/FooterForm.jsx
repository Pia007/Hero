/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import Buttons from './Buttons';


const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class FooterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            touched: {
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
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                <Row className="form-group d-flex justify-content-center">
                    <Col xs={8}  >
                        <Label htmlFor="email" className="col-8 col-form-label mx-auto invisible" />
                        <Control.text model=".email" name="email" id="email" 
                            className="contact-input form-control ft-signup"
                            placeholder="Email" 
                            validators={{
                                validEmail
                            }}
                        />
                        <Errors 
                            className="d-inline-flex justify-content-start pl-2 text-danger errors"
                            model=".email"
                            show="touched"
                            component="div"
                            messages={{
                                // required: 'Required',
                                validEmail: 'Invalid email address'
                            }}
                        />
                    </Col>
                </Row>
                <Row className="form-group mb-0 px-3 d-flex justify-content-center">
                    <Buttons 
                        type="submit" 
                        color=""
                        className="btn btn-outline-light mx-auto ft-signup"
                        btnText={"Sign Up"}
                    />
                </Row>
            </LocalForm>
        );
    }
}

export default FooterForm;
