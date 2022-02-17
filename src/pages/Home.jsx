import React from 'react';
import { Intro } from '../components/Intro';

const Home = (props) => {
    return (
        <div className="home-bg ">
            <div className="container py-0">
                <Intro />
            </div>
        </div>
    );
}

export default Home;