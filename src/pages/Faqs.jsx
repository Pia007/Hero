import PageHeader from '../components/PageHeader';
import AccordionItem from '../components/AccordionItem';
import SectionBreak from '../components/SectionBreak';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'reactstrap';

const RenderFaq = ({ faq }) => {
    return (
        <AccordionItem name={faq.question} description={faq.answer} className="faq-accordion-description"/>
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
    
    return (
        <div className="home-bg">
            <div className="container">
                <PageHeader siteLocation={"FAQs"} pageTitle={"Frequently Asked Questions"} />
                <Fade bottom cascade>
                    <Row className="row-content " id="genFacts">
                        <Col xs={12} className="px-sm-0">
                            <Fade bottom cascade>
                            <h2 className="text-primary my-3">General </h2>
                            </Fade>
                        </Col>
                        <Col xs={12} className="p-0">
                            {generalFaqs}
                        </Col>
                    </Row>
                </Fade>
                <SectionBreak />

                <Fade bottom cascade>
                    <Row className="row-content " id="genFacts">
                        <Col xs={12} className="px-sm-0">
                            <Fade bottom cascade>
                            <h2 className="text-primary my-3">Volunteer</h2>
                            </Fade>
                        </Col>
                        <Col xs={12} className="p-0">
                            {volunteerFaqs}
                        </Col>
                    </Row>
                </Fade>
                <SectionBreak />

                <Fade bottom cascade>
                    <Row className="row-content " id="genFacts">
                        <Col xs={12} className="px-sm-0">
                            <Fade bottom cascade>
                            <h2 className="text-primary my-3">Sponsors</h2>
                            </Fade>
                        </Col>
                        <Col xs={12} className="p-0">
                            {sponsorFaqs}
                        </Col>
                    </Row>
                </Fade>
                <SectionBreak />

                <Fade bottom cascade>
                    <Row className="row-content " id="genFacts">
                        <Col xs={12} className="px-sm-0">
                            <Fade bottom cascade>
                            <h2 className="text-primary my-3">Donate</h2>
                            </Fade>
                        </Col>
                        <Col xs={12} className="p-0">
                            {donateFaqs}
                        </Col>
                    </Row>
                </Fade>
            </div>
        </div>
    );
    
}

export default Faqs;