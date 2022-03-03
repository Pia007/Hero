import React from 'react';
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export const SiteCrumbs = ({ siteLocation }) => {
    return (
        <Breadcrumb className="breadcrumb mb-0 sticky" id="Top">
            <BreadcrumbItem className="bc-prev text-success pl-0"><Link to="/" className="site-link">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active className="text-primary bc-now">{siteLocation}</BreadcrumbItem>
        </Breadcrumb>
    );
}

export const PageTitle = ({ pageTitle }) => {
    return (
        <Fade bothrefm cascade>
            <h1 className="text-center text-primary">{pageTitle}</h1>
        </Fade>
    );
}

const PageHeader = ({ siteLocation, pageTitle }) => {
    return (
        <div className="container mb-3">
            <Row style={{position: 'sticky'}}>
                <Col>
                    <SiteCrumbs siteLocation={siteLocation} />
                    <PageTitle pageTitle={pageTitle} />
                </Col>
            </Row>
        </div>
    );
}

export default PageHeader;