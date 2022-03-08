import { useState } from "react";

export const Accordion = ({ name, description, titleHolder, titleContent}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        
        <div className="mission-text px-3 px-sm-0">
            <div className={titleHolder} onClick={() => setIsActive(!isActive)}>
                <h4 className="text-light mb-0"><strong className={titleContent}>{name}</strong></h4>
                <div >{isActive ? '-' : '+'}</div>
            </div>
                {isActive && 
                    <div className="text-primary p-1 description mb-1 px-3">
                        {name}, {description}
                    </div>
                }
        </div>
    );
};


