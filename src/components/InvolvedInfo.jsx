import React from 'react';
import SiteCrumbs from './SiteCrumbs';
import PageTitle from './PageTitle';
import SectionBreak from './SectionBreak';

const InvolvedInfo = () =>{
    return (
        <div className="row">
            <div className="col">
                <SiteCrumbs siteLocation="Get Involved" className="p-0" />
                <PageTitle pageTitle="Get Involved" />
                <SectionBreak />
            </div>
        </div>
    );
}
export default InvolvedInfo;

