import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Involved from './Involved';
import Volunteer from './Volunteer';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

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