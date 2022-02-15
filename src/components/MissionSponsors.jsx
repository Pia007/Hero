import { useState } from 'react';
import { SPONSORS } from '../shared/sponsors'; 
import { Row, Col } from 'reactstrap';

// determine what each accordion item should look like
const RenderAccordionItem = ({ name, description }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="mission-text accordion-item px-3 px-sm-0">
            <div className="bg-primary accordion-title" onClick={() => setIsActive(!isActive)}>
                <h4 className="text-light mb-0"><strong>{name}</strong></h4>
                <div className="">{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="text-primary p-1 accordion-description mb-1 px-3"><strong>{name}</strong>, {description}</div>}
        </div>

    );
};

// include key for each sponsor and use it as the id
// pass each sponsor into the RenderAccordionItem component 
export const MissionSponsors = () => {
    const sponsor = SPONSORS.map(sponsor => {
        return (
            <div key={sponsor.id} className="col p-0">
                <RenderAccordionItem
                    name={sponsor.name}
                    description={sponsor.description}
                />
            </div>
        )
    });
    // render mission sponsor component
    return (
        <Row className="row-content ">
            <Col xs={12} className="px-sm-0">
                <h2 className="text-primary my-3 ">Mission Sponsors</h2></Col>
            <Col xs={12} className="p-0">
                {sponsor}
            </Col>
        </Row>

    );  
}




