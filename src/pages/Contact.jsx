/* eslint-disable react/jsx-pascal-case */
import { SEO } from '../components/SEO';
import PageHeader from '../components/PageHeader';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';


const Contact = () => {
        return (
            <div >
                <SEO title="Contact | Host A Healthcare Hero" description={"description"}  content={"Contact form page of the website"}/>
                <PageHeader siteLocation={"Contact"} pageTitle={"Contact Us"} />
                <ContactInfo />
                <ContactForm />
            </div>
        );
    
}

export default Contact;