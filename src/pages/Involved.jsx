import React from 'react';
import PageHeader from '../components/PageHeader';
import InvolvedBody from '../components/InvolvedBody';
import { SEO } from '../components/SEO';

const Involved = (props) => {
    return (
        <div className="" style={{overflowX: 'hidden'}}>
            <SEO title={"Get Involved | Host A Healthcare Hero"}  description={"description"} content={"Get Involved page of the website"} />
            <PageHeader siteLocation={"Get Involved"} pageTitle={"Get Involved"} />
            <InvolvedBody />
        </div>
    );
}

export default Involved;