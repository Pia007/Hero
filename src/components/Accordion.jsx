import React, { useState } from "react";

export const Accordion = ({ name, description, titleHolder }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <div className="mission-text px-3 px-sm-0">
            <div className={titleHolder} onClick={() => setIsOpen(!isOpen)}>
                <span className="text-light mt-1 mb-0 p-0 ">{name}</span>
                <div >{isOpen ? '-' : '+'}</div>
            </div>
                {isOpen && 
                    <div className="text-primary p-1 description mb-1 px-3 shadow-lg">
                        {description}
                    </div>
                }
        </div>
    );
};


