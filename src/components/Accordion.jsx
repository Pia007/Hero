import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";
import { Collapse, Card, CardTitle, CardHeader, CardBody } from 'reactstrap';
import Fade from 'react-reveal/Fade';

export const Accordion = ({ name, description, titleHolder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const iconAnimation = useSpring({
        from: {
            transform: "rotate(0deg)",
            color: "#CD0200"
        },
        to: {
            transform: isOpen ? "rotate(225deg)" : "rotate(0deg)",
            color: isOpen ? "#CD0200" : "#3CB521"
        },
            config: { duration: "1" }
    });

    return (
        <div className="container p-2">
            <Card className='mission-text mb-1 p-2 accordion-card' style={{backgroundColor: 'transparent', border: 'none'}}>
                <CardHeader className={titleHolder} onClick={() => setIsOpen(!isOpen)}>
                    <CardTitle className='text-light mt-1 mb-0 p-0 '>{name}</CardTitle>
                    <animated.span style={iconAnimation} className='accordion-icon'>
                        +
                    </animated.span>
                </CardHeader>
                <Fade when={isOpen} duration={500}>
                    <Collapse isOpen={isOpen} className='text-primary p-0 shadow-lg description '>
                        <CardBody style={{backgroundColor: 'transparent', border: 'none', padding: '12px'}}>
                            {description}
                        </CardBody>
                    </Collapse>
                </Fade>
            </Card>
        </div>
    );
};