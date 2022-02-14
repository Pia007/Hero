import React from 'react';
import PageHeader from '../components/PageHeader';
import { Intro } from '../components/HomeIntro';

import SectionBreak from '../components/SectionBreak';
import { Row, Col } from 'reactstrap';

const Home = (props) => {
    return (
        <div className="home-bg ">
            {/* <PageHeader pageTitle={"Home"} /> */}
            <div className="container py-5">
                <Intro />
            </div>
        </div>
    );
}

export default Home;