import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import newLogo from '../images/new-logo.svg';

const AboutTable = () => {
    return (
        <Col lg={6} className="mb-5 my-lg-auto border-primary">
            <Card className="col my-auto mb-md-0 mt-md-5 mt-lg-0 border-0 px-sm-0 about-card-holder">
                <CardHeader className="bg-primary border-bottom-0 text-white ">
                    <span className="about-table-header">By the Numbers</span>
                    <img src={newLogo} className="float-right table-icon"  alt="logo"/>
                </CardHeader>
                <CardBody className="py-0 border-0 text-primary about-card-body">
                    <Row className="mb-0 border border-primary border-top-0 border-bottom-0 about-card-odd">
                        <Col className="mb-0 py-2 table-text">Founded</Col>
                        <Col className="mb-0 py-2 table-text">June 24, 2019</Col>
                    </Row>
                    <Row className="mb-0 border border-primary border-top-0 border-bottom-0 about-card-even">
                        <Col className="mb-0 py-2 table-text">Headquarters</Col>
                        <Col className="mb-0 py-2 table-text">Fictitious City, NJ</Col>
                    </Row>
                    <Row className="mb-0 border border-primary border-top-0 border-bottom-0 about-card-odd">
                        <Col className="mb-0 py-2 table-text">Employees</Col>
                        <Col className="mb-0 py-2">27</Col>
                    </Row>
                    <Row className="mb-0 border border-primary border-top-0 border-bottom-0 about-card-even">
                        <Col className="mb-0 py-2 table-text">Sponsors</Col>
                        <Col className="mb-0 py-2 table-text">5</Col>
                    </Row>
                    <Row className="mb-0 border border-primary border-top-0 about-card-odd last-dt">
                        <Col className="mb-0 py-2 table-text">Volunteers</Col>
                        <Col className="mb-0 py-2 table-text">551</Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    );
}

export default AboutTable;