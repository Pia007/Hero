import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import CardHeader from 'reactstrap/lib/CardHeader';

const AboutTable = (props) => {
    return (
        <Col lg={6} className="mb-5 my-lg-auto border-primary">
            <Card className="col my-auto mb-md-0 mt-md-5 mt-lg-0 border-0 px-sm-0 about-card-holder">
                <CardHeader className="bg-primary border-bottom-0 text-white mission-text px-3">
                    By the Numbers
                    <i className="fa fa-heartbeat fa-lg text-success text-lg float-right my-1" />
                </CardHeader>
                <CardBody className="py-0 border-0 text-primary ">
                    <Row className="mb-0 border border-primary border-top-0 border-bottom-0 about-card-odd">
                        <Col className="mb-0 py-2">Founded</Col>
                        <Col className="mb-0 py-2">June 24, 2019</Col>
                    </Row>
                    <Row className="mb-0 border border-primary border-top-0 border-bottom-0 about-card-even">
                        <Col className="mb-0 py-2">Headquarters</Col>
                        <Col className="mb-0 py-2">Summit, NJ</Col>
                    </Row>
                    <Row className="mb-0 border border-primary border-top-0 border-bottom-0 about-card-odd">
                        <Col className="mb-0 py-2">Employees</Col>
                        <Col className="mb-0 py-2">27</Col>
                    </Row>
                    <Row className="mb-0 border border-primary border-top-0 border-bottom-0 about-card-even">
                        <Col className="mb-0 py-2 last-dt">Sponsors</Col>
                        <Col className="mb-0 py-2 last-dt">4</Col>
                    </Row>
                    <Row className="mb-0 border border-primary border-top-0 about-card-odd ">
                        <Col className="mb-0 py-2 last-dt">Volunteers</Col>
                        <Col className="mb-0 py-2 last-dt">551</Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    );
}

export default AboutTable;