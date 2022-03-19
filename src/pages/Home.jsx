import { SEO } from '../components/SEO';
import { Intro } from '../components/Intro';

const Home = () => {
    
    return (
        <div  className="landing">   
            <SEO title={"Homepage | Host A Healthcare Hero"} description={"Landing Page of website"} />
            
            <div className=" m-0 p-auto hero"  style={{height: 'calc(100vh - 60px)'}}>
                <Intro /> 
            </div>
        </div> 
    );
}

export default Home;