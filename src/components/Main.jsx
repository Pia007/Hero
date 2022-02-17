import React, { Component } from 'react';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Involved from '../pages/Involved';
import Volunteer from '../pages/Volunteer';
import Footer from './Footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { fetchSponsors, fetchMembers } from '../redux/ActionCreators';

// Setting up mapStateToProps to get the state from the store - state is the argument
const mapStateToProps = state => {
    return {
        sponsors: state.sponsors,
        members: state.members
    };
};
// Setting up mapDispatchToProps object to get the dispatch function from the store - dispatch is the argument
const mapDispatchToProps = {
    fetchSponsors: () => (fetchSponsors()),
    fetchMembers: () => (fetchMembers())
};

class Main extends Component {
    // removed constructor

    // added componentDidMount to fetch data from the store 
    componentDidMount() {
        this.props.fetchSponsors();
        this.props.fetchMembers();
    }

    render() {
        
        return (
            <div >
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            {/* transferring state to redux store - use "props" instead of "state", keeping the structure of the data in mind */}
                            <Route exact path="/about" render={() => <About sponsors={this.props.sponsors.sponsors} 
                                members={this.props.members.members} /> 
                                } 
                            />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/involved" component={Involved} />
                            <Route exact path="/volunteer" component={Volunteer} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

// making data and action creators available to the store inside main component as a props
// by adding mapStateToProps & mapDispatchToProps object insied the connect function as the second argument
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));