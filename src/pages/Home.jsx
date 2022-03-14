import React from 'react';
import { SEO } from '../components/SEO';
import { Intro } from '../components/Intro';

const Home = () => {
    
    return (
        
        <div style={{overflow: 'hidden'}} className="landing">   
            <SEO title={"Host A Healthcare Hero"} description={"description"}  content={"Landing Page of website"}/>
            <div className=" m-0 p-auto hero"  style={{height: 'calc(100vh - 62px)', overflowY: 'hidden'}}>
                <Intro /> 
            </div>
        </div> 
    );
}

export default Home;