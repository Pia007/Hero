import React from 'react';
import SectionBreak from '../components/SectionBreak';
import AboutTable from '../components/AboutTable';
import{ MissionSponsors }from '../components/MissionSponsors';
import { SiteCrumbs } from '../components/PageHeader';
import { PageTitle } from '../components/PageHeader';
import { Row, Col } from 'reactstrap';

const About = (props) => {
    return (
        <div className="container">
            <SiteCrumbs siteLocation={"About"}  />
            <PageTitle pageTitle={"Our Mission"} />
            
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
                    <img className="col img-fluid d-flex mb-3 mb-xl-0 mr-3 p-0 pt-lg-0 img-thumbnail" src="./assets/images/about.jpg" alt="staff" />
                </Col>
            </Row>
                
            <Row className="pt-4"> 
                <Col className="px-0">
                    <h2 className="px-3 px-sm-0">Our History</h2>
                    <Col className="text-primary mission-text mb-3 px-sm-0 ">
                        It all began in 2010. Sofia Dawson was fresh out of nursing school and headed to her 
                        first job as a nurse. Like many nurses, she was excited to provide care for her patients.
                        But, she soon saw a side of the healthcare profession that is not taught in school. She saw 
                        that not only were nurses stressed, overworked  and unhealthy, so were workers from every aspect of 
                        healthcare. 
                    </Col>
                </Col>
            </Row>
            <Row >
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
                <Row className="flex-lg-row-reverse mb-lg-4">
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
            <MissionSponsors />
            <SectionBreak />
            {/* END MISSION SPONSORS  */}

            <div className="row row-content"> 
                <div className="col-md-6 px-sm-0">
                    <h2>Host A Healthcare Hero Team</h2>
                    <p className="text-primary mission-text">Lorem ipsum, Executive Director</p>
                    <p className="text-primary mission-text">Lorem ipsum, Administrative Operations</p>
                    <p className="text-primary mission-text">Lorem ipsum, Logistics & Transportation</p>
                    <p className="text-primary mission-text">Lorem ipsum, Food Drive Administrator</p>
                    <p className="text-primary mission-text">Lorem ipsum, Fundraising</p>
                    <p className="text-primary mission-text">Lorem ipsum, Marketing & Public Relations</p>
                    <p className="text-primary mission-text">Lorem ipsum, Community Partnerships</p>
                    <p className="text-primary mission-text">Lorem ipsum, Volunteer Management</p>
                    <p className="text-primary mission-text">Lorem ipsum, Volunteer Coordinator</p>
                    <p className="text-primary mission-text">Lorem ipsum, Programs & Events</p>
                    
                </div>
                <div className="col-md-6 px-sm-0 pl-md-3 pr-0">
                    <h2>Board of Directors</h2>
                    <p className="text-primary mission-text">Lorem, ipsum, Chairperson</p>
                    <p className="text-primary mission-text">Lorem, ipsum</p>
                    <p className="text-primary mission-text">Lorem, ipsum</p>
                    <p className="text-primary mission-text">Lorem, ipsum</p>
                    <p className="text-primary mission-text">Lorem, ipsum</p>
                    <p className="text-primary mission-text">Lorem, ipsum</p>
                    <p className="text-primary mission-text">Lorem, ipsum</p>
                </div>
            </div>
        </div>
    );
}

export default About;