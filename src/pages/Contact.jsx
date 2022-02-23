/* eslint-disable react/jsx-pascal-case */
import PageHeader from '../components/PageHeader';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

const Contact = () => {
        return (
            <div >
                <PageHeader siteLocation={"Contact"} pageTitle={"Contact Us"} />
                <ContactInfo />
                <ContactForm />
            </div>
        );
    
}

export default Contact;