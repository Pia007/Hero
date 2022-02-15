/* eslint-disable react/jsx-pascal-case */
import PageHeader from '../components/PageHeader';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import Fade from 'react-reveal/Fade';

function Contact() {
        return (
            <div className="home-bg">
                <PageHeader siteLocation={"Contact"} pageTitle={"Contact Us"} />
                <Fade bottom >
                    <ContactInfo />
                    <ContactForm />
                </Fade>
            </div>
        );
    
}

export default Contact;