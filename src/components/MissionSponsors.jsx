import { MissionAccordion } from './MissionAccordion';
import { SPONSORS } from '../shared/sponsors'; 
import { Col } from 'reactstrap';

export const MissionSponsors = () => {
    return (
        <div className="row-content">
            <h2>Mission Sponsors</h2>
            <Col className="p-0">
                {SPONSORS.map(({ name, description }) => (
                  <MissionAccordion title={name} description={description} />
                ))}
            </Col>
        </div>
    );   
};
  


