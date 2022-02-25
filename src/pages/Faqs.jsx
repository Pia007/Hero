import  PageHeader, { FaqCrumbs }  from '../components/PageHeader';
import SectionBreak from '../components/SectionBreak';
import Fade from 'react-reveal/Fade';
import { FadeTransform } from 'react-animation-components';
import { Row, Col} from 'reactstrap';
import { FaqAccordion } from '../components/Accordion';
import { Loading } from '../components/Loadingicon';


const RenderFaq = ({ faq }) => {
    return (
        <FaqAccordion question={faq.question} answer={faq.answer} className="faq-accordion-description"/>
    );
}

const RenderFaqSection = ({ faqTitle,  factType }) => {
    return (
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
                    <FaqCrumbs />
                </Col>
                <Col xs={12} className="p-0">
                    <Fade bottom cascade>
                        {factType}
                    </Fade>
                </Col>
            </Row>
        </FadeTransform>
    );
}


const Faqs = (props) => {
    
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

    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    if (props.errMess) {
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
        
            <div style={{overflow: 'hidden'}}>
                <div className='container-fluid home-bg ' id='faq'>
                    <PageHeader siteLocation={"FAQs"} pageTitle={"Frequently Asked Questions"} />
                    {/* <FaqCrumbs /> */}
                </div>
                
                <div className='container mt-3 sticky' style={{ zIndex: 1}}>
                    <div className="container p-0 mt-3" id="general">
                        <RenderFaqSection 
                            faqTitle={"General"}
                            factType={generalFaqs}
                        />
                    </div>
                    <SectionBreak />

                    <div className="container p-0  mt-3" id="volFaq">
                        <RenderFaqSection 
                            faqTitle={"Volunteer"}
                            factType={volunteerFaqs}
                        />
                    </div>
                    <SectionBreak />

                    <div className="container p-0" id="sponsor">
                        <RenderFaqSection 
                            faqTitle={"Sponsor"}
                            factType={sponsorFaqs}
                        />
                    </div>
                    <SectionBreak />

                    <div className="container p-0" id="donate">
                        <RenderFaqSection 
                            faqTitle={"Donate"}
                            factType={donateFaqs}
                        />
                    </div>
                </div>
            </div>
        
    );
}

export default Faqs;