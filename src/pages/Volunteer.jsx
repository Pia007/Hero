import VolunteerForm from '../components/VolunteerForm';
import PageHeader from '../components/PageHeader';

const Volunteer = ({siteLocation, pageTitle}) => {
    return (
        <div className="container">
            <PageHeader siteLocation={"Volunteer"} pageTitle={"Volunteer"} />
            <VolunteerForm />
        </div>
    );
}
export default Volunteer;