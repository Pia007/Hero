import { Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

export const SiteCrumbs = ({ siteLocation }) => {
    return (
        <Breadcrumb className="breadcrumb mb-0 px-0 sticky" id="Top">
            <BreadcrumbItem className="bc-prev text-success "><Link to="/" className="site-link">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active className="text-warning bc-now">{siteLocation}</BreadcrumbItem>
        </Breadcrumb>
    );
}

export const PageTitle = ({ pageTitle }) => {
    return (
        <div className="container-fluid">
            <FadeTransform 
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(0%)'
            }}
        > 
                <h1 className="text-center text-sky">{pageTitle}</h1>
            {/* </Fade> */}
        </FadeTransform>
        </div>
    );
}

const PageHeader = ({ siteLocation, pageTitle }) => {
    return (
        <div className="container mb-3">
            <Row style={{position: 'sticky'}}>
                <Col className="px-0">
                    <SiteCrumbs siteLocation={siteLocation} />
                    <PageTitle pageTitle={pageTitle} />
                </Col>
            </Row>
        </div>
    );
}

export default PageHeader;