import React from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';

export const Intro= () => {
    return (
        <div className="container-fluid" style={{overflowX: 'hidden'}}>
      
            
            <Row className=" text-center mx-0 row-content" style={{height: '96vh'}}>
            
                <Col xs={12} className="border-0 px-0 text-center align-self-center justify-content-around">
                    {/* <Fade bottom cascade> */}
                        <p className="sub-text align-self-center font-weight-bold text-primary ">
                            {/* <em> */}
                            <Fade bottom cascade>
                                <span>H</span><img src="assets/images/new-logo-lp.svg"  alt="logo" className="lp-logo" /><span>st a Healthcare Her</span><img src="assets/images/new-logo-lp.svg"  alt="logo" className="lp-logo" />
                            {/* </em>  */}
                            </Fade>
                        </p>
                        
                    {/* </Fade> */}
                </Col>
                <Col className="col border-0 px-0 text-center ">
                    <Fade bottom cascade>
                        <div className="">
                            <button className='btn btn-outline-success'>Find Out More!</button>
                        </div>
                    </Fade>
                </Col>
            
            </Row>
        </div>
    );
}

