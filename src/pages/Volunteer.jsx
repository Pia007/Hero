import VolunteerForm from '../components/VolunteerForm';
import PageHeader from '../components/PageHeader';

const Volunteer = ({siteLocation, pageTitle}) => {
    return (
        <div >
            <PageHeader siteLocation={"Volunteer"} pageTitle={"Volunteer"} />
            <VolunteerForm />
        </div>
    );
}
export default Volunteer;