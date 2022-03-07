import React from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export const Intro= () => {
    return (
        <div className="container container-fluid d-flex justify-content-around" style={{height: '100vh'}}>
            <div className="hero-inner" >
                <div className="my-auto p-0 align-self-center" style={{height: '50vh'}}>
                    <Col xs={12} className="border-0 px-0 mb-3 text-center align-self-center justify-content-around" >
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
                    <Col xs={8} md={3} lg={3} xl={3} className="border-0 px-0 text-center mx-auto">
                        <Fade bottom cascade>
                            <Link to="/about" className="col col-xl-10 text-center btn btn-lg btn-outline-success" > Find Out More </Link> 
                        </Fade>
                    </Col>
                </div>
            </div>
        </div>
    );
}

