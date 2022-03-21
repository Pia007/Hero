import React from 'react';
import PageHeader from '../components/PageHeader';
import { FadeTransform } from 'react-animation-components';
import { SEO } from '../components/SEO';
import { Loading } from '../components/Loading';
import { Row, Col, Card, CardImg, CardBody } from 'reactstrap';

const RenderVolunteer = ({ volunteer }) => {
    return (
        <React.Fragment>
            <FadeTransform 
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(0%)'
                }}
            > 
                <Card className='d-flex flex-direction-column meet-card '>
                    <Row className='row-content justify-content-around mb-6 px-3'>
                        <Col xs={12} md={10} lg={5} className=' m-1 mt-lg-5 mt-xl-3 px-4 py-lg-3 pl-lg-0 pr-lg-0' >
                            <CardImg src={volunteer.image} alt={volunteer.first} className='col d-flex img-fluid img-thumbnail mx-auto mr-3 mt-lg-3 bg-primary meet-img '/>
                        </Col>
                        <Col xs={12} lg={6} className='m-1 mx-auto mx-lg-0'>
                            <CardBody className='my-xl-3 text-success px-0 px-lg-0 px-xl-3'>
                                <h3 className='text-center mb-4 meet-role'>{volunteer.role}</h3>
                                <blockquote className='col-md-10 col-lg-12 mx-auto  meet-text'>'{volunteer.description}'</blockquote>
                                <cite className='float-right meet-text mx-5'><em>~ {volunteer.first}</em> </cite>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </FadeTransform>
        </React.Fragment>
    );
}

const VolunteerBio = (props) => {

    if (props.infoIsLoading) {
        return (
            <div className='container'>
                <Row>
                    <Loading />
                </Row>
            </div>
        );
    }

    if (props.infoErrMess) {
        return (
            <div className='container'>
                <Row>
                    <Col>
                        <h4>{props.errMess}</h4>
                    </Col>
                </Row>
            </div>
        )
    }

    if(props.volunteer) {
        return (
            <div className='container'>
                <SEO title={ ` ${props.volunteer.first} | Host a Healthcare Hero`} description={'description'} content={`Biography of volunteer ${props.volunteer.first}`} />
                <PageHeader siteLocation={props.volunteer.first} pageTitle={`Meet ${props.volunteer.first}`} />
                <div className='meet-holder'> 
                    <RenderVolunteer volunteer={props.volunteer} />
                </div>
            </div>
        )
    }
    return <div />;
}

export default VolunteerBio;