import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Involved from './Involved';
import Volunteer from './Volunteer';
import Footer from './Footer';
// WK4 deleting imports CAMPSITE, COMMENT, PARTNERS AND PROMOTIONS
// no longing storing the application state in the Main Component;
// transferring it to the redux store
// WK4 importing withRouter and connect
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// const mapStateToProps = state => {
//     return {
//         campsites: state.campsites,
//         comments: state.comments,
//         partners: state.partners,
//         promotions: state.promotions
//     };
// };

class Main extends Component {
    render() {
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
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