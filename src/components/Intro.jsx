import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import Fade from 'react-reveal/Fade';

export const Intro= () => {
    return (
        <Jumbotron fluid className="">
            <div className="container-fluid" style={{overflowX: 'hidden'}}>
                
                <Row className=" text-center mx-0 row-content p-0" style={{height: '96vh'}}>
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
                            <div className="">
                                <button className='btn btn-outline-success btn-lg shadow-lg'>Find Out More!</button>
                            </div>
                        </Fade>
                    </Col>
                
                </Row>
            </div>
        </Jumbotron>
    );
}

