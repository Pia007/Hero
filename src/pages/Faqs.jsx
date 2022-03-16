import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Accordion} from '../components/Accordion';
import { Loading } from '../components/Loading';
import { Row, Col} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import  PageHeader from '../components/PageHeader';
import Fade from 'react-reveal/Fade';


const RenderFaq = ({ faq }) => {
    return (
        <Accordion
            name={faq.question} 
            description={faq.answer}
            titleHolder={'accordion-title faq-accordion-title py-3 px-3 '}
            className="faq-accordion-description"
        />
    );
}

const RenderFaqSection = ({ faqTitle, factType }) => {

    return (
        <div className="container p-0 mt-3">
            <FadeTransform 
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(0%)'
                }}>
                <Row className="row-content " >
                    <Col xs={12} className="px-sm-0">
                        <Fade bottom cascade>
                            <h2 className="text-success my-3">{faqTitle}</h2>
                        </Fade>
                    </Col>
                    <Col xs={12} className="p-0">
                        {factType}
                    </Col>
                </Row>
            </FadeTransform>
        </div>
    );
}

const FaqHeader = () => {
    return (
        <div className="container text-center ">
            <h1 className='text-sky'> Frequently <br /> Asked Questions</h1>
        </div>
    );
}


const Faqs = (props) => {
    const [ selected, setSelected ] = useState("generalFaqs");
    
    const generalFaqs = props.faqs?.filter(faq => faq.category === "General").map(filteredFaq => { 
        return (
            <div key={filteredFaq.id} className="col p-0">
                <RenderFaq
                    faq = {filteredFaq}
                />
            </div>
        );
    });

    const volunteerFaqs = props.faqs?.filter(faq => faq.category === "Volunteer").map(filteredFaq => { 
        return (
            <div key={filteredFaq.id} className="col p-0">
                <RenderFaq
                    faq = {filteredFaq}
                />
            </div>
        );
    });

    const donateFaqs = props.faqs?.filter(faq => faq.category === "Donate").map(filteredFaq => { 
        return (
            <div key={filteredFaq.id} className="col p-0">
                <RenderFaq
                    faq = {filteredFaq}
                />
            </div>
        );
    });

    const sponsorFaqs = props.faqs?.filter(faq => faq.category === "Sponsor").map(filteredFaq => { 
        return (
            <div key={filteredFaq.id} className="col p-0">
                <RenderFaq
                    faq = {filteredFaq}
                />
            </div>
        );
    });

    if (props.faqIsLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    if (props.faqErrMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        
        <div className='container'>
            <SEO title={"FAQs | Host A Healthcare Hero"}  description={"description"} content={"Faqs page of the website"}/>
            <div className='container-fluid home-bg ' id='faq'>
                <PageHeader siteLocation={"FAQs"}  />
                <FaqHeader />
            </div>
            <div className="container text-center p-0">
                <button onClick={() => { setSelected('generalFaqs') }} className="btn btn-outline-success mr-sm-2 faqBtn">General</button>
                <button onClick={() => { setSelected('volunteerFaqs') }} className="btn btn-outline-success mr-sm-2 faqBtn">Volunteer</button>
                <button onClick={() => { setSelected('sponsorFaqs') }} className="btn btn-outline-success mr-sm-2 faqBtn">Sponsor</button>
                <button onClick={() => { setSelected('donateFaqs') }}className="btn btn-outline-success faqBtn">Donate</button>
            </div>
            

            <div className='container mt-3 '>
                
                { 
                    (selected === 'generalFaqs') ? <RenderFaqSection faqTitle={"General"} factType={generalFaqs} /> : null 
                }
                {
                    (selected === 'volunteerFaqs') ? <RenderFaqSection faqTitle={"Volunteer"} factType={volunteerFaqs} /> : null 
                }
                {
                    (selected === 'sponsorFaqs') ? <RenderFaqSection faqTitle={"Sponsor"} factType={sponsorFaqs} /> : null 
                }
                {
                    (selected === 'donateFaqs') ? <RenderFaqSection faqTitle={"Donate"} factType={donateFaqs} /> : null 
                }
                
            </div>
        </div>
    );
}

export default Faqs;