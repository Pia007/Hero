import React, { Component } from 'react';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Involved from '../pages/Involved';
import Volunteer from '../pages/Volunteer';
import VolunteerPortal from '../pages/VolunteerPortal';
import Faqs from '../pages/Faqs';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { SEO } from '../components/SEO';
import { useLocation, Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSponsors, fetchMembers, fetchFaqs , fetchBios } from '../redux/ActionCreators';

// Setting up mapStateToProps to get the state from the store - state is the argument
const mapStateToProps = state => {
    return {
        sponsors: state.sponsors,
        members: state.members,
        faqs: state.faqs,
        bios: state.bios
    };
};
// Setting up mapDispatchToProps object to get the dispatch function from the store - dispatch is the argument
const mapDispatchToProps = {
    fetchSponsors: () => (fetchSponsors()),
    fetchMembers: () => (fetchMembers()),
    fetchFaqs: () => (fetchFaqs()),
    fetchBios: () => (fetchBios())
};

class Main extends Component {
    // removed constructor

    // added componentDidMount to fetch data from the store 
    componentDidMount() {
        this.props.fetchSponsors();
        this.props.fetchMembers();
        this.props.fetchFaqs();
        this.props.fetchBios();
    }

    render() {
        // hide footer if user is on the home page
        const RenderFooter = () => {
            const location = useLocation();
            return location.pathname === '/home' ? null : <Footer />;
        }
        
        return (
            
            <div className='home-bg' >
                <SEO title={"Host A Healthcare Hero"} content={ "Volunteer to give back to an healtcare hero"}/>
                <Header />
                    <ScrollToTop>
                        <Switch>
                            <Route path="/home" component={Home} />
                            {/* transferring state to redux store - use "props" instead of "state", keeping the structure of the data in mind */}
                            <Route exact path="/about" render={() => <About sponsors={this.props.sponsors.sponsors} members={this.props.members.members} 
                                errMess={this.props.sponsors.errMess}
                                isLoading={this.props.sponsors.isLoading}
                                membersLoading={this.props.members.isLoading}
                                membersErrMess={this.props.members.errMess} 
                            /> } />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/involved" component={Involved} />
                            <Route exact path="/volunteer" component={Volunteer} />
                            <Route exact path="/faqs" render={() => <Faqs faqs={this.props.faqs.faqs} 
                                faqErrMess={this.props.faqs.errMess}
                                faqIsLoading={this.props.faqs.isLoading} 
                            /> } />
                            <Route exact path="/volunteerportal" render={() => <VolunteerPortal bios={this.props.bios.bios}
                                biosErrMess={this.props.bios.errMess}
                                biosIsLoading={this.props.bios.isLoading} 
                            />} />
                            <Redirect to="/home" />
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