import React from 'react';
import PageHeader from '../components/PageHeader';
import InvolvedBody from '../components/InvolvedBody';

const Involved = (props) => {
    return (
        <div className="container">
            <PageHeader siteLocation={"Get Involved"} pageTitle={"Get Involved"} />
            <InvolvedBody />
        </div>
    );
}

export default Involved;