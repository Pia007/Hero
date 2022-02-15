import { useState } from 'react';;

export const MissionAccordion = ({ name, description  }) => {
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
