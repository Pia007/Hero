import { MissionAccordion } from './MissionAccordion';
import { SPONSORS } from '../shared/sponsors'; 
import { Row, Col } from 'reactstrap';

export const MissionSponsors = () => {
    return (
        <Row className="row-content ">
            <Col xs={12} className="px-sm-0">
                <h2 className="text-primary my-3 ">Mission Sponsors</h2></Col>
            <Col xs={12} className="p-0">
                {SPONSORS.map(({ name, description }) => (
                    <MissionAccordion name={name} description={description} />
                ))}
            </Col>
        </Row>
    );   
};



