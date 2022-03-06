import PageHeader from '../components/PageHeader';
import VolunteerInfo from '../components/VolunteerInfo';
import VolunteerForm from '../components/VolunteerForm';
import { SEO } from '../components/SEO';


const Volunteer = () => {
    return (
        <div >
            <SEO title={"Volunteer | Host A Healthcare Hero"} description={"description"} content={"Volunteer form page of the website"} />
            <PageHeader siteLocation={"Volunteer"} pageTitle={"Volunteer"} />
            <VolunteerInfo />
            <VolunteerForm />
            
        </div>
    );
}
export default Volunteer;