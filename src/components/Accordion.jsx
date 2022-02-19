import { useState } from "react";

export const AccordionItem = ({ name, description}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div  className="mission-text accordion-item px-3 px-sm-0">
            <div className="bg-primary accordion-title" onClick={() => setIsActive(!isActive)}>
                <h4 className="text-light mb-0"><strong className="sponsor-name">{name}</strong></h4>
                <div className="">{isActive ? '-' : '+'}</div>
            </div>
                {isActive && 
                    <div className="text-primary p-1 accordion-description mb-1 px-3">
                        <span className="sponsor-name-description" >{name}</span>, {description}
                    </div>
                }
        </div>
    );
};

export const FaqAccordion = ({ question, answer}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div  className="mission-text faq-accordion-item px-3 px-sm-0">
            <div className=" faq-accordion-title" onClick={() => setIsActive(!isActive)}>
                <h4 className="text-light mb-0"><strong className="question">{question}</strong></h4>
                <div className="">{isActive ? '-' : '+'}</div>
            </div>
                {isActive && 
                    <div className="text-primary p-1 faq-accordion-description mb-1 px-3">
                        {answer}
                    </div>
                }
        </div>
    );
};

