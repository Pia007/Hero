import SiteCrumbs from './SiteCrumbs';
import PageTitle from './PageTitle';
import SectionBreak from './SectionBreak';


const VolunteerInfo = () => {
    return (
        <div className="row">
            <div className="col">
                <SiteCrumbs siteLocation="Volunteer" />
                <PageTitle pageTitle="Volunteer" />
                <SectionBreak />
            </div>
        </div>
    );
}
export default VolunteerInfo;
