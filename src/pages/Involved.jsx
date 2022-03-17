import PageHeader from '../components/PageHeader';
import InvolvedBody from '../components/InvolvedBody';
import { SEO } from '../components/SEO';

const Involved = () => {
    return (
        
        <div className="container" style={{overflowX: 'hidden'}} >
            <SEO title={"Get Involved | Host a Healthcare Hero"}  description={"description"} content={"Get Involved page of the website"} /> 
            <PageHeader siteLocation={"Get Involved"} pageTitle={"Get Involved"} />
            <InvolvedBody />
        </div>
    );
}

export default Involved;