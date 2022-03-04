import React, { useState} from 'react';
import PageHeader from '../components/PageHeader';
import { Col, Row, Form, FormGroup, Input, Label, FormFeedback, Button, Card, CardImg, CardBody, CardText } from 'reactstrap';
import Buttons from '../components/Buttons';
import { Link } from 'react-router-dom';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    const matchBio = props.bios?.map(bio  => {
        return (
            <div key={bio.id} className="col-md-6 m-1">
                <RenderBioCard bio={bio} />
            </div>
        );
    })

    return (
        <div className="container">
            <Row className="row-content justify-content-around">
                <Col className="col-md-6 m-1 bg-primary login">
                    <h3 className="text-center text-light my-2">Login</h3>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            {/* <Label for="username">Username</Label> */}
                            <Input 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder="Username" 
                                className="contact-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            {/* <Label for="password">Password</Label> */}
                            <Input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Password" 
                                className="contact-input" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                
                            />
                        </FormGroup>
                        <FormGroup>
                            <Col md={12} className="d-flex justify-content-end p-0">
                                <Link
                                    btntext={"Cancel"}
                                    type="submit" 
                                    color="danger"
                                    className="shadow-md mr-3 btn btn-danger"
                                    to="/home"
                                >
                                    Cancel
                                </Link>
                                <Buttons 
                                    type="submit"
                                    className="float-right"
                                    color={'success'}
                                    btntext={"Login"}
                                />
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
                <Col className="col-md-6 m-1">
                    {matchBio}
                </Col>
            </Row>
        </div>
    );
}

function RenderBioCard(props)  {
    const { bio } = props;
    return (
        <Col className="mr-0">
            <Card width="100%" className="bg-primary">
                <CardImg top width="100%" src={bio.image} alt={bio.first} />
                <CardBody>
                    <CardText className="text-center text-light">
                        Welcome back, {bio.first}!
                        {/* <p className="">{bio.role}</p> */}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    )
}


function VolunteerPortal(props) {
    const { bios } = props;

    const bioCard = bios.map(bio => {
        return (
            <div key={bio.id} className="col-md-6 m-1">
                <RenderBioCard bio={bio} />
            </div>
        );
    });

    return (
        <div className="container">
            <PageHeader siteLocation={"Volunteer Portal"} pageTitle={"Volunteer Access"} />
            <Login />
            <Row className="row-content">
                {bioCard}
            </Row>
        </div>
        
    );
}



export default VolunteerPortal;