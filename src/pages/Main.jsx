import React, { Component } from 'react';
import Header from '../components/Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Involved from './Involved';
import Volunteer from './Volunteer';
import VolunteerSpotlight from './VolunteerSpotlight'; 
import VolunteerBio from './VolunteerBios';
import Faqs from './Faqs';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { SEO } from '../components/SEO';
import { useLocation, Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSponsors, fetchMembers, fetchFaqs , fetchVolunteers } from '../redux/ActionCreators';

// Get the state from the redux store
const mapStateToProps = state => {
    return {
        sponsors: state.sponsors,
        members: state.members,
        faqs: state.faqs,
        volunteers: state.volunteers
    };
};
// Get the dispatch functions from the redux store
const mapDispatchToProps = {
    fetchSponsors: () => (fetchSponsors()),
    fetchMembers: () => (fetchMembers()),
    fetchFaqs: () => (fetchFaqs()),
    fetchVolunteers: () => (fetchVolunteers())
};

class Main extends Component {

    // Load data when the component is loaded
    componentDidMount() {
        this.props.fetchSponsors();
        this.props.fetchMembers();
        this.props.fetchFaqs();
        this.props.fetchVolunteers();
    }
    
    render() {

        // hide header & footer if user is on the home page
        const RenderHeader = () => {
            const location = useLocation();
            return location.pathname === '/home' ? null : <Header />;
        }
        const RenderFooter = () => {
            const location = useLocation();
            return location.pathname === '/home' ? null : <Footer />;
        }
        
        const VolunteerBioId = ({ match }) => {
            return (
                <VolunteerBio
                    volunteer={this.props.volunteers.volunteers.filter(volunteer => volunteer.id === +match.params.volunteerId)[0]}
                    infoIsLoading={this.props.volunteers.isLoading}
                    infoErrMess={this.props.volunteers.errMess}
                />
            );
        };

        return (
            <div className='home-bg' >
                <SEO title={'Host a Healthcare Hero'} content={ 'Volunteer to give back to an healtcare hero'}/>
                <RenderHeader />
                <ScrollToTop>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route exact path='/about' render={() => 
                            <About 
                                sponsors={this.props.sponsors.sponsors} 
                                errMess={this.props.sponsors.errMess}
                                isLoading={this.props.sponsors.isLoading}
                                members={this.props.members.members} 
                                membersLoading={this.props.members.isLoading}
                                membersErrMess={this.props.members.errMess} 
                            /> } 
                        />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/involved' component={Involved} />
                        <Route exact path='/volunteersignup' component={Volunteer} />
                        <Route exact path='/faqs' render={() => 
                            <Faqs faqs={this.props.faqs.faqs} 
                                faqErrMess={this.props.faqs.errMess}
                                faqIsLoading={this.props.faqs.isLoading} 
                            /> } 
                        />
                        <Route exact path='/volunteerspotlight' render={() => 
                            <VolunteerSpotlight volunteers={this.props.volunteers} 
                                volunteersErr={this.props.volunteers.errMess}
                                volunteersLoading={this.props.volunteers.isLoading}
                            />}
                        />
                        <Route exact path='/volunteers/:volunteerId' component={VolunteerBioId}/>
                        <Redirect to='/home' />
                    </Switch>
                </ScrollToTop> 
                <RenderFooter />
            </div>
        );
    }
}

// making data and action creators available to the store inside main component as a props

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));