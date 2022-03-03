import React from 'react';
import PageHeader from '../components/PageHeader';
import LoginForm from '../components/Login';

function VolunteerPortal(props) {
    return (
        <div>
            <PageHeader siteLocation={"Volunteer Portal"} pageTitle={"Volunteer Access"} />
            <LoginForm />
            
        </div>
    );
}

export default VolunteerPortal;