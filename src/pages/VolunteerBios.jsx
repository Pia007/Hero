import React, { useState} from 'react';
import PageHeader from '../components/PageHeader';
import Buttons from '../components/Buttons';
import { Loading } from '../components/LoadingIcon';
import { Link } from 'react-router-dom';
import { Col, 
        Row, 
        Form, 
        FormGroup, 
        Input, 
        Card, 
        CardImg, 
        CardBody, 
        CardText } 
from 'reactstrap';

function RenderVolunteer({ volunteer })  {
    return (
        <div className="col-md-5 m-1" >
            {/* <FadeTransform 
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}> */}
            <Card>
                <CardImg top src={volunteer.image} alt={volunteer.first} />
                <CardBody>
                    <CardText>{volunteer.role}</CardText>
                </CardBody>
            </Card>
            {/* </FadeTransform> */}
        </div>
    );
}

function VolunteerBio(props) {

    // const getBio = props.bios.bios.filter(bio => bio.name === "Richard" ).map(filteredBio => {

    //     return (
    //         <div key={filteredBio.id} className="col-md-6 m-1">
    //             <RenderBioCard bio={filteredBio} />
    //         </div>
    //     );
    // });

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
                <PageHeader siteLocation={props.volunteer.first} pageTitle={"Volunteer Spotlight"} />
                {/* <Login /> */}
                <h2>{props.volunteer.first}</h2>
                <div className="row">
                    <RenderVolunteer volunteer={props.volunteer}/>
                </div>
            </div>
            
        )
    }
    return <div />;
}

export default VolunteerBio;