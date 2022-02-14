import { useState } from 'react';

export const MissionAccordion = ({ name, description  }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="mission-text accordion-item">
            <div className="bg-primary mb-2 accordion-title" onClick={() => setIsActive(!isActive)}>
                <div className=''>{name}</div>
                <div className="">{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="text-primary p-1 accordion-content">{description}</div>}
        </div>

    );
};
