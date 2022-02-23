import React from 'react';
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import { useLocation, Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export const SiteCrumbs = ({ siteLocation }) => {
    return (
        <Breadcrumb className="breadcrumb mb-0 sticky" id="Top">
            <BreadcrumbItem className="bc-prev text-success pl-0"><Link href="/" className="site-link">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active className="text-primary bc-now">{siteLocation}</BreadcrumbItem>
        </Breadcrumb>
    );
}
export const FaqCrumbs = () => {
    const location = useLocation();
    const { pathname } = location;
    const faqLocation = pathname.split('/')[1];

    return (
        <div className='container p-0'>
            <ul className="d-flex justify-content-start list-unstyled faqLinks" >
                <li className={faqLocation[1] === "" ? "active" : "visited"}>
                    <a href="#general" className="btn btn-link mx-0 faq-link pl-0">General</a>
                </li>
                <li className={faqLocation[1] === "volunteer" ? "active" : ""}>
                    <a href="#volFaq" className="btn btn-link  mx-0 faq-link">Volunteer</a>
                </li>
                <li className={faqLocation[1] === "sponsor" ? "active" : ""}>
                    <a href="#sponsor" className="btn btn-link  mx-0 faq-link">Sponsor</a>
                </li>
                <li className={faqLocation[1] === "donate" ? "active" : ""}>
                    <a href="#donate" className="btn btn-link mx-0 faq-link">Donate</a>
                </li>
                <li className={faqLocation[1] === "top" ? "active" : ""}>
                    <a href="#top" className="btn btn-link mx-0 faq-link">Back to Top</a>
                </li>
            </ul>
        </div>
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