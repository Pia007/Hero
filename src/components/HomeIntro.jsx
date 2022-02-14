import React from 'react';
import { Row } from 'reactstrap';

export const Intro= () => {
    return (
        <Row class="">
            <div className="col card card-block border-0 px-0">
                <img className="d-block border-0 intro-img" src="assets/images/logo.svg"  alt="heart logo" />
                
                {/* Image Text  */}
                <div className="carousel-caption col-8 align-items-center d-flex" id="landing-caption">
                    <div className=" text-center m-auto" > 
                        <p className="sub-text mx-auto font-weight-bold text-light">
                            Host A Healthcare Hero provides personal care, activities
                            & support to healthcare workers in northern New Jersey as they continue
                            to provide care to their patients.
                        </p>
                    </div>
                </div> 
            </div>
        </Row>
    );
}

