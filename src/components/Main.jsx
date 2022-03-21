import React, { Component } from 'react';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Involved from '../pages/Involved';
import Volunteer from '../pages/Volunteer';
import VolunteerSpotlight from '../pages/VolunteerSpotlight'; 
import VolunteerBio from '../pages/VolunteerBios';
import Faqs from '../pages/Faqs';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { SEO } from '../components/SEO';
import { useLocation, Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSponsors, fetchMembers, fetchFaqs , fetchVolunteers } from '../redux/ActionCreators';

// Setting up mapStateToProps to get the state from the store - state is the argument
const mapStateToProps = state => {
    return {
        sponsors: state.sponsors,
        members: state.members,
        faqs: state.faqs,
        volunteers: state.volunteers
    };
};
// Setting up mapDispatchToProps object to get the dispatch function from the store - dispatch is the argument
const mapDispatchToProps = {
    fetchSponsors: () => (fetchSponsors()),
    fetchMembers: () => (fetchMembers()),
    fetchFaqs: () => (fetchFaqs()),
    fetchVolunteers: () => (fetchVolunteers())
};

class Main extends Component {
    // removed constructor

    // added componentDidMount to fetch data from the store 
    componentDidMount() {
        this.props.fetchSponsors();
        this.props.fetchMembers();
        this.props.fetchFaqs();
        this.props.fetchVolunteers();
    }
    
    render() {
        // hide footer if user is on the home page
        const RenderFooter = () => {
            const location = useLocation();
            return location.pathname === '/home' ? null : <Footer />;
        }
        
        const VolunteerWithId = ({ match }) => {
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
                <Header />
                <ScrollToTop>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route exact path='/about' render={() => 
                            <About sponsors={this.props.sponsors.sponsors} 
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
                        <Route exact path='/volunteers/:volunteerId' component={VolunteerWithId}/>
                        <Redirect to='/home' />
                    </Switch>
                </ScrollToTop> 
                <RenderFooter />
            </div>
        );
    }
}

// making data and action creators available to the store inside main component as a props
// by adding mapStateToProps & mapDispatchToProps object insied the connect function as the second argument
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));