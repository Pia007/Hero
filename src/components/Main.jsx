import React, { Component } from 'react';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Involved from '../pages/Involved';
import Volunteer from '../pages/Volunteer';
import Faqs from '../pages/Faqs';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { useLocation, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSponsors, fetchMembers, fetchFaqs } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Setting up mapStateToProps to get the state from the store - state is the argument
const mapStateToProps = state => {
    return {
        sponsors: state.sponsors,
        members: state.members,
        faqs: state.faqs
    };
};
// Setting up mapDispatchToProps object to get the dispatch function from the store - dispatch is the argument
const mapDispatchToProps = {
    fetchSponsors: () => (fetchSponsors()),
    fetchMembers: () => (fetchMembers()),
    fetchFaqs: () => (fetchFaqs()),
    resetContactForm: () => (actions.reset('contactForm'))
};

class Main extends Component {
    // removed constructor

    // added componentDidMount to fetch data from the store 
    componentDidMount() {
        this.props.fetchSponsors();
        this.props.fetchMembers();
        this.props.fetchFaqs();
    }

    render() {
        // hide footer if user is on the home page
        const RenderFooter = () => {
            const location = useLocation();
            return location.pathname === '/home' ? null : <Footer />;
        }
        
        return (
            <div className='home-bg'>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
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
                                <Route exact path="/contact" render={() => <Contact resetContactForm={this.props.resetContactForm} />} />
                                <Route exact path="/involved" component={Involved} />
                                <Route exact path="/volunteer" component={Volunteer} />
                                <Route exact path="/faqs" render= {() => <Faqs faqs={this.props.faqs.faqs} 
                                    errMess={this.props.faqs.errMess}
                                    isLoading={this.props.faqs.isLoading} 
                                /> } />
                                <Redirect to="/home" />
                            </Switch>
                        </ScrollToTop>
                    </CSSTransition>
                </TransitionGroup>
                <RenderFooter />
            </div>
        );
    }
}

// making data and action creators available to the store inside main component as a props
// by adding mapStateToProps & mapDispatchToProps object insied the connect function as the second argument
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));