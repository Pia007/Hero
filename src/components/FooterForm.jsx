/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Col, FormGroup, Form, Input,  FormFeedback} from 'reactstrap';
import Buttons from './Buttons';

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
        this.handleChange = this.handleChange.bind(this);
    }

    validate(email) {
        const errors = {
            email: ''
        };

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

    handleSubmit = event => {
        setTimeout(() => {
            console.log('Current State is: ' + JSON.stringify(this.state));
            console.log('NEWSLETTER REQUEST SUBMITTED');
            this.resetForm();
        }, 2000);

        event.preventDefault();
    };

    resetForm() {
        this.setState({
            email: '',
            touched: {
                email: false
            }
        });
    }
    
    render() {

        const errors = this.validate( this.state.email);

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row className="d-flex justify-content-center">
                    <Col xs={8}  >
                        <Input type="email" htmlFor="email"name="email" id="email" 
                            className="contact-input"
                            placeholder="Email" 
                            value={this.state.email}
                            invalid={!!errors.email}
                            onBlur={this.handleBlur("email")} 
                            onChange={this.handleChange} 
                            
                        />
                        <FormFeedback className="pl-2">{errors.email}</FormFeedback>

                    </Col>
                    
                </FormGroup>
                <FormGroup row className=" mb-0 px-3 d-flex justify-content-center">
                    <Buttons 
                        id="Popover1"
                        type="submit" 
                        color=""
                        className="btn btn-outline-light mx-auto ft-signup"
                        btnText={"Sign Up"}
                        
                    />
                </FormGroup>
            </Form>
        );
    }
}

export default FooterForm;
