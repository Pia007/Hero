import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const ContactInfo = () =>{
    return (
        <div className="container">
            {/* Contact Info */}
            <Fade bottom cascade>
                <Row className="row-content pb-0 mb-4">
                    <Col md={7} className="text-primary">
                        <p className="mission-text"><strong>Host A Healthcare Hero</strong> relies heavily on the strength of community partners and
                            volunteers to provide healthcare heroes with appreciative care. We'd love to hear your thought, concerns and ideas.
                        </p>
                        <p className="mission-text">
                            Please complete the contact form below and we will get back to you as soon as possible.
                            You are welcome to review our <Link to='/faqs' style={{textDecoration: 'underline'}}>FAQs</Link> for any questions.
                        </p>
                        <p className="mission-text">
                            Thank you for your interest in Host A Healthcare Hero!
                        </p>
                        <p className="mission-text">
                            Lorem ipsum, Executive Director
                        </p>
                    </Col>
                </Row>

                <Row className=" p-0 text-primary">
                    <Col sm={6} className="text-primary">
                        <h5 className="mb-0 mission-text text-primary"><u >Address:</u></h5>
                        <address className="address-info">
                            2124 W Heroes LN, Suite 99<br />
                            Fictitious City, NJ 01007<br />
                        </address>
                        <h5 className="mb-0 mission-text text-primary"><u >Hours:</u></h5>
                        <address className=" address-info">
                            Monday - Friday<br />
                            9AM - 3PM<br />
                            Or call us.
                        </address>

                        <h5 className="mb-0 text-primary mission-text"><u className="">Phone & Email</u></h5>
                        <a role="button" className="btn btn-link p-0 text-primary address-info" href="tel:+19737774321"><i className="fa fa-phone" ></i> 1-973-777-4321</a><br />
                        <a role="button" className="btn btn-link p-0 text-primary address-info" href="mailto:notARealEmail@NotReal.org"><i className="fa fa-envelope-o" ></i> info@healthcareheroes.org</a>
                    </Col>
                </Row>
            </Fade>
        </div>
    
    );
}

export default ContactInfo;