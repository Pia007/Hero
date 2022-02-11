import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb className="text-secondary">
                        <BreadcrumbItem className="bc-prev text-success"><Link to="/" className="text-success">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active className="bc-now text-secondary">About</BreadcrumbItem>
                    </Breadcrumb>
                    {/* <h1 className="text-center text-primary">About Us</h1>
                    <hr className="col-sm-8 my-0" /> */}
                </div>
            </div>
            <h1 className="text-center text-primary mt-0">Our Mission</h1>
            <div className="row row-content pt-0">
                <div className="col px-sm-0">
                    <p className="text-center text-primary mission-text">
                        <strong >Host A Healthcare Hero </strong> is committed to showing healthcare workers throughout northern  
                        New Jersey that we care just as much about their health and wellbeing as they do ours. The organization relies on 
                        community partners and volunteers to make it all possible.
                    </p>
                </div>
            </div>
            <hr className="col-sm-8 my-0" />

            <div className="row row-content">
                <div className="col px-sm-0">
                    <h2>Our Purpose</h2>
                    <p className=" text-primary mission-text">
                        Around the world, healthcare workers have been stretched beyond their limits. Many have succumbed to illness 
                        and been estranged from their loved ones. Right here in northern New Jersey, like most, our healthcare workers
                        have gone above and beyond to provide us with quality care. Yet, they have little time for themselves. We are an 
                        organization committed to showing healthcare heroes that we appreciate them. Their well being is just as important 
                        as ours. We aim to provide meals, health and wellness, fitness and personal care services free of charge to our 
                        healthcare heroes.
                    </p>
                    
                </div>
            </div>
            <hr className="col-sm-8  my-0"/>
                
            <div className="row row-content"> 
                <div className="col-lg-6 pl-sm-0">
                    <h2>Our History</h2>
                    <p className="text-primary mission-text">
                        It all began in 2010. Sofia Dawson was fresh out of nursing school and headed to her 
                        first job as a nurse. Like many nurses, she was excited to provide care for her patients.
                        But, she soon saw a side of the healthcare profession that is not taught in school. She saw 
                        that not only were nurses stressed, overworked  and unhealthy, so were workers from every aspect of 
                        healthcare. 
                    </p>
                    <p className="text-primary mission-text px-sm-0">
                        Sofia was determined to not just make a difference for her patients but for her coworkers, too. She 
                        found that many of her coworkers only ate one meal a day. Usually an unhealthy one. Most, found it hard to 
                        sleep after their shifts. Although, they were on their feet for 12 to 14hrs a day, many were in poor health. 
                        Combining all of these, she also learn that they had very little time for basic personal care. Like a simple 
                        haircut.
                    </p>
                    
                </div>  
                <div className="col col-lg-6 px-sm-0">
                    <img className="col d-flex my-4 mt-lg-5 mr-3 img-fluid p-0 pt-lg-4" src="./assets/images/about.jpg" alt="staff" />
                    
                </div>     
                
                <div className="row ">
                    <div className="col">
                        <p className="col text-primary mission-text px-sm-0">
                            She began researching healthy eating and mindful meditation. Before long, Sofia was sharing this information
                            with her peers. Eventually, this collective sharing included fitness tips.  The core group consisted of five healthcare
                            professionals that branched out and spreaded health and wellness tips throughout northern New Jersey. They were
                            healthcare heroes.
                
                        </p>
                    </div>
                </div>
                <div className="row flex-lg-row-reverse">
                    <div className="col">
                        <p className="col text-primary mission-text pl-sm-0">
                            In 2019, Sofia was given the opportunity to speak at a healthcare symposium. She invited her fellow
                            heroes to join her. It was at that event, that they decided to make it official. <strong>Host A Healthcare Hero</strong>
                            was born. Six months later, the Covid-19 pandemic hit northern New Jersey. As the healthcare system
                            was tested, Host A Healthcare Hero was more determined than ever to provide quality care for patients and 
                            healthcare workers. The call went out for help, community heroes answered and the rest is history.
                        </p>
                    </div> 
                    <div className="col-lg-6 ">
                        <div className="col card my-4 mb-md-0 mt-md-5 mt-lg-0 border-0 px-sm-0 about-card-holder">
                            <h3 className="card-header bg-danger text-white">By the Numbers<i className="fa fa-heartbeat text-success text-lg nav-logo float-right" /></h3>
                            <div className="card-body py-0  about-card">
                                <dl className="row mb-0 text-dark">
                                    <dt className="col-6 mb-0 py-2">Founded</dt>
                                    <dd className="col-6 mb-0 py-2">June 24, 2019</dd>
                                    <dt className="col-6 mb-0 py-2">Headquarters</dt>
                                    <dd className="col-6 mb-0 py-2">Summit, NJ</dd>
                                    <dt className="col-6 mb-0 py-2">Employees</dt>
                                    <dd className="col-6 mb-0 py-2">27</dd>
                                    <dt className="col-6 mb-0 py-2 last-dt">Volunteers</dt>
                                    <dd className="col-6 mb-0 py-2 last-dd">551</dd>
                                </dl>
                            </div>  
                        </div>    
                    </div>
                </div>
            </div>
            <hr className="col-sm-8  my-0"/>

            {/* MISSION SPONSORS  */}
            <div className="row row-content">
                <div className="col px-sm-0">
                    <h2 className="">Mission Sponsors</h2>
                    <ul className="nav nav-pills mb-2 text-primary mission-text">
                        <li className="nav-item ">
                            <a className="nav-link rounded-pill active" href="#alpha" role="tab" data-toggle="pill">
                                Alpha
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill" href="#chopra" role="tab" data-toggle="pill">
                                Chopra
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill" href="#sophie" role="tab" data-toggle="pill">
                                Cutz
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill " href="#jersey" role="tab" data-toggle="pill">
                                Jersey
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content text-primary mission-text">
                        <div role="tab-panel" className="tab-pane fade show active " id="alpha">
                            <h4>Alpha Food Services, Inc.</h4>
                            <p className="">Alpha Food Services is a family business that has proudly served northern
                                New Jersey for over 75 years. Over the years the business has grown to include 8 restaurants, 4 food 
                                trucks, 2 food distribution warehouses and a food pantry. When the pandemic hit, Alpha Food Services was able to
                                assist in mediating the food crisis. They have partnered with 
                                Host A Healthcare Hero to provide health meals to healthcare workers.
                            </p>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="chopra">
                            <h4>Choprah Health & Wellness, LLC.</h4>
                            <p className="">Chopra Health & Wellness is a non-profit health and wellness center that
                                provides free mental health and holistic services to the community. They have 
                                been in service for 30 years and have partnered with Host A Healthcare Hero to provide 
                                free mental health and holistic services to healthcare workers.
                            </p>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="sophie">
                            <h4>Cutz 4 All, LLC.</h4>
                            <p className="">Cutz 4 All has proudly served northern New Jersey for over 25 years. Over the years, with 5 locations,
                                they have worked with several foundations to provide grooming services for cancer patients, disabled Americans
                                and victims of domestic violence. They are dedicated to working with Host A Healthcare Hero to extend free
                                services to healthcare workers.
                            </p>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="jersey">
                            <h4>Jersey Strength & Fitness, LLC.</h4>
                            <p className="">Jersey Strength & Fitness originated on the boardwalk of Atlantic City. After retiring with 7 locations in John Fitness
                                wanted to give back and began working with several organizations to provide functional training 
                                to individuals with Parkinson's disease. That was 15 years ago. Since then, Jersey S&F has open 4 new locations
                                throughout northern New Jersey soley dedicated to the community. Jersey Strength & Fitness has partnered
                                with Host A Healthcare Worker to extend free fitness services to healthcare workers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="col-sm-8 my-0"/>
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
                <div className="col-md-6 pl-3 pr-0">
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