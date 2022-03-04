import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Intro } from '../components/Intro';

const Home = (props) => {
    
    return (
        // <div className=" d-flex align-items-center justify-content-center" style={{height: '100vh', padding: '0'}}>
            <Jumbotron fluid className="px-3 p-0 hero"  style={{height: '100vh'}}
                // style={{
                //     backgroundImage: `linear-gradient(rgba(4, 13, 20, 0.9), rgba(4, 13, 20, 0.9)), url(assets/images/background.jpg)`,
                //     backgroundPosition: 'center center',
                //     backgroundRepeat: 'no-repeat',
                //     backgroundSize: 'cover',
                //     width:'100%',
                //     height:'100%',
                //     position: 'relative',
                //     overflow: 'hidden'
                // }}
            >
                <Intro />
            </Jumbotron>
        // </div>
    );
}

export default Home;