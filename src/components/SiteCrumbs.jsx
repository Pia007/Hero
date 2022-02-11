import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SiteCrumbs = ({ siteLocation }) => {
    return (
        <Breadcrumb className="breadcrumb">
            <BreadcrumbItem className="bc-prev text-success pl-0"><Link to="/" className="site-link">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active className="text-secondary bc-now">{siteLocation}</BreadcrumbItem>
        </Breadcrumb>
    );
}

export default SiteCrumbs;