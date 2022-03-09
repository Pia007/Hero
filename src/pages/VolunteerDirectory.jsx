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
        CardImgOverlay, 
        CardTitle,
        CardBody, 
        CardText } 
from 'reactstrap';


function RenderBioCard({ volunteer })  {
    // const { bio } = props;
    return (
        <Col className="mr-0">
            <Card width="100%" className="bg-primary">
                <Link to={`/volunteers/${volunteer.id}`}>
                <CardImg top width="100%" src={volunteer.image} alt={volunteer.first} />
                <CardImgOverlay>
                    <CardTitle>{volunteer.first}</CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
        </Col>
    )
}

// const MatchBio = (props) => {
   
//     const getBio = props.bios.bios.filter(bio => bio.id === 5 ).map(filteredBio => {

//         return (
//             <div key={filteredBio.id} className="col-md-6 m-1">
//                 <RenderBioCard bio={filteredBio} />
//             </div>
//         );
//     });

//     if (props.bioIsLoading) {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <Loading />
//                 </div>
//             </div>
//         );
//     }

//     if (props.bioErrMess) {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <h4>{props.errMess}</h4>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <div className="container">
//             <PageHeader siteLocation={"Volunteer Portal"} pageTitle={"Volunteer Access"} />
//             <Login />
//             <Row className="row-content">
//                 <RenderBioCard bio={getBio} />
//             </Row>
//         </div>
//     )
// }

// function Login(props) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email, password);
//     }

    // const matchBio = props.bios?.filter(bio => bio.password === password && bio.email === email).map(filteredBio => {
    //     if(filteredBio) {
    //         return (
    //             <div key={filteredBio.id} className="col-md-6 m-1">
    //                 <RenderBioCard bio={filteredBio} />
    //             </div>
    //         );
    //     }
    //     return <div />;
    // });
    

//     return (
//         <div className="container">
//             <Row className="row-content justify-content-around">
//                 <Col className="col-md-6 m-1 bg-primary login">
//                     <h3 className="text-center text-light my-2">Login</h3>
//                     <Form onSubmit={handleSubmit}>
//                         <FormGroup>
//                             <Input 
//                                 type="text" 
//                                 name="username" 
//                                 id="username" 
//                                 placeholder="Username" 
//                                 className="contact-input"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Input 
//                                 type="password" 
//                                 name="password" 
//                                 id="password" 
//                                 placeholder="Password" 
//                                 className="contact-input" 
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
                                
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Col md={12} className="d-flex justify-content-end p-0">
//                                 <Link
//                                     btntext={"Cancel"}
//                                     type="submit" 
//                                     color="danger"
//                                     className="shadow-md mr-3 btn btn-danger"
//                                     to="/home"
//                                 >
//                                     Cancel
//                                 </Link>
//                                 <Buttons 
//                                     type="submit"
//                                     className="float-right"
//                                     color={'success'}
//                                     btntext={"Login"}
//                                 />
//                             </Col>
//                         </FormGroup>
//                     </Form>
//                 </Col>
//             </Row>
//         </div>
//     );
// }


function Volunteers(props) {

    const volunteers = props.volunteers.volunteers.map(volunteer => {

        return (
            <div key={volunteer.id} className="col-md-6 m-1">
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
        )
    }

    
    return (
        <div className="container">
            <PageHeader siteLocation={"Spotlight"} pageTitle={"Volunteer Spotlight"} />
            {/* <Login /> */}
            <h2>Volunteers</h2>
            {/* <Row className="row-content">
                <RenderBioCard bio={props.bio}/>
            </Row> */}
            <div className="row">
                {volunteers}
            </div>
        </div>
        
    )
    
}

export default Volunteers;