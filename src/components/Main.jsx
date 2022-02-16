import React, { Component } from 'react';
import { SPONSORS } from '../shared/sponsors';
import { MEMBERS } from '../shared/members';
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
//import { fetchSponsors, fetchMembers } from '../redux/ActionCreator';

// Setting up mapStateToProps to get the state from the store - state is the argument
// const mapStateToProps = state => {
//     return {
//         sponsors: state.sponsors,
//         members: state.members
//     };
// };

// const mapDispatchToProps = {
//     fetchSponsors: () => (fetchSponsors()),
//     fetchMembers: () => (fetchMembers())
// };

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sponsors: SPONSORS,
            members: MEMBERS
        };
    }
    // componentDidMount() {
    //     this.props.fetchSponsors();
    //     this.props.fetchMembers();
    // }

    
    render() {
        
        return (
            <div >
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            {/* transferring state to redux store - use "props" instead of "state" did not work yet */}
                            <Route exact path="/about" render={() => <About sponsors={this.state.sponsors} members={this.state.members} /> } />
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

export default withRouter(connect()(Main));