import React from 'react';
import PageHeader from '../components/PageHeader';
import Fade from 'react-reveal/Fade';
import { SEO } from '../components/SEO';
import { Loading } from '../components/LoadingIcon';
import { Col, Row, Card, CardImg, CardBody } from 'reactstrap';

function RenderVolunteer({ volunteer })  {
    return (
        <React.Fragment>
            <Card className="d-flex flex-direction-column meet-card ">
                <Row className='row-content justify-content-around mb-6'>
                    <Col lg={5} className=" m-1 px-4 p-lg-3" >
                        <CardImg src={volunteer.image} alt={volunteer.first} className="col d-flex img-fluid img-thumbnail mr-3 bg-primary meet-img"/>
                    </Col>
                    <Col lg={6} className="m-1">
                        <CardBody className="my-xl-3 text-success">
                            <Fade bottom cascade>
                                <h3 className='text-center mb-4 meet-role '>{volunteer.role}</h3>
                            </Fade>
                                <h5 className=' meet-text'>{volunteer.description}</h5>
                            <Fade bottom >
                                <h5 className='text-right meet-text px-5 '><em>~ {volunteer.first}</em> </h5>
                            </Fade>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </React.Fragment>
    );
}

function VolunteerBio(props) {

    if (props.infoIsLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    if (props.infoErrMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        )
    }

    if(props.volunteer) {
        return (
            <div className="container">
                <SEO title={ ` ${props.volunteer.first} | Host A Healthcare Hero`}  description={"description"} content={`Biography of volunteer ${props.volunteer.first}`}/>
                <PageHeader siteLocation={props.volunteer.first} pageTitle={`Meet ${props.volunteer.first}`} />
                <div className="meet-holder"> 
                    <RenderVolunteer volunteer={props.volunteer}/>
                </div>
            </div>
        )
    }
    return <div />;
}

export default VolunteerBio;