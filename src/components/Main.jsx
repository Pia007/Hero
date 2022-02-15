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

// Setting up mapStateToProps to get the state from the store - state is the argument
const mapStateToProps = state => {
    return {
        sponsors: state.sponsors,
        members: state.members
    };
};

class Main extends Component {
    // Implementing Redux: Deleted the constructor method, transferring state to redux store
    constructor(props) {
        super(props);
        this.state = {
            sponsors: SPONSORS,
            members: MEMBERS
        };
    }
    
    render() {
        
        return (
            <div >
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    {/* transferring state to redux store - use "props" instead of "state" */}
                    <Route exact path="/about" render={() => <About sponsors={this.props.sponsors} members={this.props.members} /> } />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/involved" component={Involved} />
                    <Route exact path="/volunteer" component={Volunteer} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
// using Connect method to allow main comp to take its state from the redux store
// wrap the export statement with the withRouter method to allow the react router to still work with the changes to the export statement
export default withRouter(connect(mapStateToProps)(Main));