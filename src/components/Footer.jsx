import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import FooterForm  from './FooterForm';

const Footer = () => {
    return (
        <footer className='site-footer text-light ' >
            <div className='container '>
                <Row className='px-5 pt-5 pb-2'>
                    <Col md={4} className='mb-4 text-center p-0'>
                        <p className='mb-0 text-light ft-heading'><u className='u-line'>Address</u></p>
                        <address className='tex-light ft-info'>
                            2124 W Heroes LN, Suite 99<br />
                            Fictitious City, NJ 01007<br />
                        </address>
                        <p className='mb-0 text-light ft-heading'><u className='u-line '>Phone & Email</u></p>
                        <a role='button' className='btn btn-link p-0 text-light ft-info' href='tel:+19737774321'>
                            <i className='fa fa-phone' /> 
                            {' '}1-973-777-4321
                        </a><br />
                        <a role='button' className='btn btn-link p-0 text-light ft-info' href='mailto:notARealEmail@hostahealthcareheroes.org' >
                            <i className='fa fa-envelope-o' /> 
                            {' '}info@healthcareheroes.org
                        </a>
                    </Col>
                    <Col md={4} className='p-md-0'>
                        <Col className='mx-auto mx-md-0 mb-4 p-xs-3 p-md-0 px-md-auto'>
                            <p className='mb-0 text-light text-center ft-heading'><u className='u-line'>Info</u></p>
                            <ul className='list-unstyled ft-info'>
                                <li className='text-center '><Link className='active' to='/home'>Home</Link></li>
                                <li className='text-center '><Link to='/about'>About</Link></li>
                                <li className='text-center '><Link to='/involved'>Get Involved</Link></li>
                                <li className='text-center '><Link to='/contact'>Contact</Link></li>
                                <li className='text-center '><Link to='/volunteersignup'>Volunteer</Link></li>
                                <li className='text-center '><Link to='/faqs'>FAQs</Link></li>
                            </ul>
                        </Col>
                    </Col>
                    
                    <Col md={4} className='p-0'>
                        <div className='mb-3 text-center '>
                            <a className='btn btn-social-icon pt-md-0 pl-0' href='http://instagram.com/' aria-label='Instagram'><i className='fa fa-instagram text-light'></i></a>
                            <a className='btn btn-social-icon pt-md-0' href='http://facebook.com/' aria-label='Facebook'><i className='fa fa-facebook text-light'></i></a>
                            <a className='btn btn-social-icon pt-md-0' href='http://twitter.com/' aria-label='Twitter'><i className='fa fa-twitter text-light'></i></a>
                            <a className='btn btn-social-icon pt-md-0' href='http://youtube.com/' aria-label='YouTube'><i className='fa fa-youtube text-light'></i></a>
                        </div>
                        <p className='update-text mb-1 text-center footer-heading'>
                            Sign up to receive news and updates.
                        </p> 
                        <FooterForm />
                    </Col>
                    <Col md={12} className='p-0 mt-3'>
                        <p className='copyright text-center text-light mb-0 pb-2'>
                            &copy; 2022 HOST A HEALTHCARE HERO <br />
                        </p> 
                    </Col>
                </Row>
            </div>
            <p className='copyright text-center text-light mb-0 pb-2 design'>
                Site Designed & Built by <a href='https://www.linkedin.com/in/pia-torain-dev/' target='_blank' rel='noreferrer'><u className='u-line'>Pia Torain</u></a>
            </p>
        </footer>
    );
}

export default Footer;