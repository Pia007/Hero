import React from 'react';
import { MEMBERS } from '../shared/members.jsx';
import { Row, Col } from 'reactstrap';

export const TeamMembers = (props)  =>{
    return (
        <Row classname="row-content">
            <Col className="p-0">
                <h2>Host A Hero Foundation</h2>
                <Col className=" text-primary mission-text px-0">
                    {MEMBERS.map((member) => (
                        <p>{member.name}, {member.title}</p>
                    ))}
                </Col>
            </Col>
        </Row>
    );
}

