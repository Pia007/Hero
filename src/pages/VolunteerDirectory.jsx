import React from 'react';
import PageHeader from '../components/PageHeader';
import { Loading } from '../components/LoadingIcon';
import { Link } from 'react-router-dom';
import { Row, Card, CardImg, CardTitle, CardBody } 
from 'reactstrap';

function RenderBioCard({ volunteer })  {
    return (
        <Card className="mb-5 bg-primary vol-cards">
            <Link to={`/volunteers/${volunteer.id}`}>
                <CardImg className="cd-img p-2" src={volunteer.image} alt={volunteer.first} />
                <CardBody className="p-1 vol-card-body text-center text-light">
                    <CardTitle className="my-1 vol-title">{volunteer.first}</CardTitle>
                </CardBody>
            </Link>
        </Card>
    );
}

function Volunteers(props) {

    const volunteers = props.volunteers.volunteers.map(volunteer => {
        return (
            <div key={volunteer.id} className="col-md-4 m-0">
                <RenderBioCard volunteer={volunteer} />
            </div>
        );
    });

    if (props.volunteers.infoIsLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    if (props.volunteers.infoErrMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.volunteers.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <PageHeader siteLocation={"Spotlight"} pageTitle={"Volunteer Spotlight"} />
            <p className='text-center text-success mb-0 spotlight-intro'>
                To get an idea of who our volunteers are, click on an image to find out more about any of these amazing people.
            </p>
            <Row className='row-content justify-content-around my-6'>
                {volunteers}
            </Row>
        </div>
    );
}

export default Volunteers;