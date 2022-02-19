import PageHeader from '../components/PageHeader';
import SectionBreak from '../components/SectionBreak';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'reactstrap';
import { FaqAccordion } from '../components/Accordion';
import { Loading } from '../components/Loadingicon';


const RenderFaq = ({ faq }) => {
    return (
        <FaqAccordion question={faq.question} answer={faq.answer} className="faq-accordion-description"/>
    );
}

const RenderFaqSection = ({ faqTitle,  factType }) => {
    return (
        <Fade bottom cascade>
            <Row className="row-content " id="genFacts">
                <Col xs={12} className="px-sm-0">
                    <Fade bottom cascade>
                    <h2 className="text-primary my-3">{faqTitle}</h2>
                    </Fade>
                </Col>
                <Col xs={12} className="p-0">
                    {factType}
                </Col>
            </Row>
        </Fade>
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
        <div className="home-bg">
            <div className="container">
                <PageHeader siteLocation={"FAQs"} pageTitle={"Frequently Asked Questions"} />
                <RenderFaqSection 
                    faqTitle={"General"}
                    factType={generalFaqs}
                />
                <SectionBreak />

                <RenderFaqSection 
                    faqTitle={"Volunteer"}
                    factType={volunteerFaqs}
                />
                <SectionBreak />

                <RenderFaqSection 
                    faqTitle={"Sponsor"}
                    factType={sponsorFaqs}
                />
                <SectionBreak />

                <RenderFaqSection 
                    faqTitle={"Donate"}
                    factType={donateFaqs}
                />
            </div>
        </div>
    );
}

export default Faqs;