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

// const mapStateToProps = state => {
//     return {
//         sponsors: state.sponsors
//     };
// };

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sponsors: SPONSORS,
            members: MEMBERS
            // active: '',
            // redirect: false
        };
    }
    
    render() {
        
        return (
            <div >
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/about" render={() => <About sponsors={this.state.sponsors} members={this.state.members} /> } />
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

export default Main;