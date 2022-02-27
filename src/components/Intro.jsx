import React from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export const Intro= () => {
    return (
        <Jumbotron fluid className="d-flex align-items-center justify-content-around "  style={{height: '80vh'}}>
            <Row className=" text-center mx-0 row-content p-0">
                <Col xs={12} className="border-0 px-0 text-center align-self-center justify-content-around">
                    <p className="sub-text align-self-center font-weight-bold text-primary d-none d-md-block">
                        <Fade bottom cascade>
                            <span className=''>H</span><img src="assets/images/new-logo-lp.svg"  alt="logo" className="img-fluid lp-logo" /><span className=''>st a Healthcare Hero</span>
                        </Fade>
                    </p>
                    
                    <h1 className="sub-text align-self-center font-weight-bold text-primary d-md-none">
                        <Fade bottom cascade>
                            <span className=''>H</span>
                        </Fade>
                        <Fade bottom cascade>
                                <img src="assets/images/new-logo-lp.svg"  alt="logo" className="img-fluid lp-logo" />
                        </Fade>
                        <Fade bottom cascade>
                            <span className=''>st</span> 
                        </Fade>
                        <br />
                        <Fade bottom cascade ><span>a</span></Fade>
                        <br />   
                        <Fade bottom cascade>Healthcare</Fade> 
                        <Fade bottom cascade>Hero</Fade> 
                    </h1>
                </Col>
                <Col className="col border-0 px-0 text-center ">
                    <Fade bottom cascade>
                        <Link to="/about" className=" text-center  btn btn-lg btn-outline-success" > Find Out More </Link> 
                    </Fade>
                </Col>
            
            </Row>
        </Jumbotron>
    );
}

