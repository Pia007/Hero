import React from 'react';
import { SEO } from '../components/SEO';
import { Jumbotron } from 'reactstrap';
import { Intro } from '../components/Intro';

const Home = (props) => {
    
    return (
        // <div className=" d-flex align-items-center justify-content-center" style={{height: '100vh', padding: '0'}}>
        <div style={{overflow: 'hidden'}} className="landing">   
            <SEO title={"Landing Page | Host A Healthcare Hero "} description={"description"}  content={"Landing Page of website"}/>
            <Jumbotron fluid className=" m-0 p-auto hero"  style={{height: '100vh', overflowY: 'hidden'}}>
                <Intro /> 
            </Jumbotron>
        </div> 
        // </div>
    );
}

export default Home;