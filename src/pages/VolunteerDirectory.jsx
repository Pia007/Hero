import PageHeader from '../components/PageHeader';
import { SEO } from '../components/SEO';
import { Loading } from '../components/Loading';
import { Link } from 'react-router-dom';
import { Row, Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

const RenderBioCard = ({ volunteer }) =>  {
    return (
        <FadeTransform 
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(0%)'
            }}
        > 
            <Card className="mb-5 bg-primary vol-cards">
                <Link to={`/volunteers/${volunteer.id}`}>
                    <CardImg className="cd-img p-2" src={volunteer.image} alt={volunteer.first} />
                    <CardBody className="p-1 vol-card-body text-center text-light">
                        <CardTitle className="my-1 vol-title ">{volunteer.first}</CardTitle>
                    </CardBody>
                </Link>
            </Card>
        </FadeTransform> 
    );
}

const Volunteers = (props) => {

    const volunteers = props.volunteers.volunteers.map(volunteer => {
        return (
            <div key={volunteer.id} className="col-md-4 m-0">
                <RenderBioCard volunteer={volunteer} />
            </div>
        );
    });

    if (props.volunteersLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    if (props.volunteersErr) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <SEO title={"Volunteer Spotlight | Host A Healthcare Hero"}  description={"description"} content={"Spotlight on a few of the volunteers"}/>
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