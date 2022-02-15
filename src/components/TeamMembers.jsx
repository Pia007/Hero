import React from 'react';
import { MEMBERS } from '../shared/members.jsx';
import { Row, Col } from 'reactstrap';

// determine what each member rendering should look like
const RenderTeamMember = ({ name, title }) => {
    return (
        <Col className=" text-primary mission-text px-0">
            <p>{name}, {title}</p>
        </Col>
    );
};

// include key for each member and use it as the id
// pass each member into the RenderTeamMember component
export const TeamMembers = (props)  =>{
    const member = MEMBERS.map(member => {
        return (
            <div key={member.id} className="col p-0">
                <RenderTeamMember
                    name={member.name}
                    title={member.title}
                />
            </div>
        )
    });
    // render team members component
    return (
        <Row className="row-content">
            <Col className="p-0">
                <h2>Host A Hero Foundation</h2>
                {member}
            </Col>
        </Row>
    );
}

