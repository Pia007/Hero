import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function VolunteerInfo() {
    return (
        <div className="row">
            <div className="col">
                <Breadcrumb>
                    <BreadcrumbItem className="bc-prev text-success"><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active className="text-secondary bc-now">Volunteer</BreadcrumbItem>
                </Breadcrumb>
                <h1 className="text-center text-primary">Volunteer</h1>
                <hr className="col-sm-8 my-0" />
            </div>
        </div>
    );
}
export default VolunteerInfo;
