import { SiteCrumbs } from '../components/PageHeader';
import { PageTitle } from '../components/PageHeader';
import { Row, Col } from 'reactstrap';
import { Loading } from '../components/Loadingicon';
import AccordionItem from '../components/AccordionItem';
import SectionBreak from '../components/SectionBreak';
import AboutTable from '../components/AboutTable';
import Fade from 'react-reveal/Fade';

// Accordion for each sponsor
const RenderAccordionItem = ({ sponsor }) => {
    return (
        <AccordionItem 
            name={sponsor.name} 
            description={sponsor.description} 
        />
    );
};

// render each team member
const RenderTeamMember = ({ member }) => {
    return (
        <Col className=" text-primary mission-text px-0">
            <p>{member.name}, {member.title}</p>
        </Col>
    );
};


const About = (props) => {

    // define & map over sponsors and pass each to RenderAccordionItem
    // fixed about page refresh issue by using?
    const sponsor = props.sponsors?.map(sponsor => {
        return (
            <div key={sponsor.id} className="col p-0">
                <RenderAccordionItem
                    sponsor={sponsor}
                />
            </div>
        )
    });

    // Set up Conditional Rendering
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        )
    }


    // define & map over team members and pass each to RenderTeamMember
    const memberList = props.members?.map(member => {
        return (
            <div key={member.id} className="col p-0">
                <RenderTeamMember
                    member={member}
                />
            </div>
        )
    });

    // Set up Conditional Rendering
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="home-bg">
            <div className="container">
                <SiteCrumbs siteLocation={"About"}  />
                <PageTitle pageTitle={"Our Mission"} />
                <Fade bottom cascade>
                    <Row className="row-content pt-0">
                        <Col className="px-sm-0">
                            <p className="text-center text-primary mission-text">
                                <strong >Host A Healthcare Hero </strong> Around the world, healthcare workers have been stretched beyond their limits. Many have succumbed to illness 
                                and been estranged from their loved ones. Right here in northern New Jersey, like most, our healthcare workers
                                have gone above and beyond to provide us with quality care. Yet, they have little time for themselves. We are an 
                                organization committed to showing healthcare heroes that we appreciate them. Their well being is just as important 
                                as ours. We aim to provide meals, health and wellness, fitness and personal care services free of charge to our 
                                healthcare heroes.
                            </p>
                        </Col>
                    </Row>
                
                    <SectionBreak />
                    
                    <Row>
                        <Col className="px-sm-0 mt-5">
                            <img className="col img-fluid d-flex mb-3 mb-xl-0 mr-3 p-0 pt-lg-0 img-thumbnail" src="assets/images/about.jpg" alt="staff" />
                        </Col>
                    </Row>

                    <Row className="pt-4"> 
                        <Col className="px-0">
                            <Fade bottom cascade>
                                <h2 className="px-3 px-sm-0 text-primary">Our History</h2>
                            </Fade>
                            
                            <Col className="text-primary mission-text mb-3 px-sm-0 ">
                                It all began in 2010. Sofia Dawson was fresh out of nursing school and headed to her 
                                first job as a nurse. Like many nurses, she was excited to provide care for her patients.
                                But, she soon saw a side of the healthcare profession that is not taught in school. She saw 
                                that not only were nurses stressed, overworked  and unhealthy, so were workers from every aspect of 
                                healthcare. 
                            </Col>
                        </Col>
                    </Row>
                    <Row className="pb-lg-4">
                            <Col className="px-0 pr-xl-3">    
                            <Col className="text-primary mission-text px-sm-0 mb-3">
                                Sofia was determined to not just make a difference for her patients but for her coworkers, too. She 
                                found that many of her coworkers only ate one meal a day. Usually an unhealthy one. Most, found it hard to 
                                sleep after their shifts. Although, they were on their feet for 12 to 14hrs a day, many were in poor health. 
                                Combining all of these, she also learn that they had very little time for basic personal care. Like a simple 
                                haircut.
                            </Col>
                            <Col className="text-primary mission-text px-sm-0 mb-4">
                                She began researching healthy eating and mindful meditation. Before long, Sofia was sharing this information
                                with her peers. Eventually, this collective sharing included fitness tips.  The core group consisted of five healthcare
                                professionals that branched out and spreaded health and wellness tips throughout northern New Jersey. They were
                                healthcare heroes.
                            </Col>
                        </Col> 
                        <Row className="flex-lg-row-reverse mb-lg-4 ">
                            <Col className="">
                                <Col className="text-primary mission-text mb-4 mb-md-0 px-sm-0 pr-lg-0">
                                    In 2019, Sofia was given the opportunity to speak at a healthcare symposium. She invited her fellow
                                    heroes to join her. It was at that event, that they decided to make it official. <strong>Host A Healthcare Hero </strong>
                                    was born. Six months later, the Covid-19 pandemic hit northern New Jersey. As the healthcare system
                                    was tested, Host A Healthcare Hero was more determined than ever to provide quality care for patients and 
                                    healthcare workers. The call went out for help, community heroes answered and the rest is history.
                                </Col>
                            </Col> 
                            <AboutTable />
                        </Row>
                    </Row>
                    <SectionBreak />

                    {/* MISSION SPONSORS */}
                    {/* Each sponsor is rendered in this row as an accordion item */}
                    
                    <Fade bottom cascade>
                        <Row className="row-content ">
                            <Col xs={12} className="px-sm-0">
                                <Fade bottom cascade>
                                <h2 className="text-primary my-3">Mission Sponsors</h2>
                                </Fade>
                            </Col>
                            <Col xs={12} className="p-0">
                                {sponsor}
                            </Col>
                        </Row>
                    </Fade>
                    <SectionBreak />
                    {/* END MISSION SPONSORS  */}

                    {/* FOUNDATION */}
                    {/* Member list is rendered in theis row */}
                    <Fade bottom cascade>
                        <Row className="row-content">
                            <Col className="px-sm-0 ">
                                <Fade bottom cascade>
                                    <h2 className="text-primary">Host A Hero Foundation</h2>
                                </Fade>
                                {memberList}
                            </Col>
                        </Row> 
                    </Fade>
                    {/* END FOUNDATION */}
                    
                </Fade>
            </div>
        </div>
    );
}

export default About;