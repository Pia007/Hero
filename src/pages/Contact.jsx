/* eslint-disable react/jsx-pascal-case */
import PageHeader from '../components/PageHeader';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

function Contact() {
        return (
            <div className="home-bg">
                <PageHeader siteLocation={"Contact"} pageTitle={"Contact Us"} />
                <ContactInfo />
                <ContactForm />
            </div>
        );
    
}

export default Contact;