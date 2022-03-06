import React, { Component } from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { Helmet } from 'react-helmet';
import './App.css';

// In configuresStore.js: the function returns the redux store 
// we capture that return value in a constant called store
const store = ConfigureStore();
class App extends Component {
    render() {
        return (
          //Wrap BrowserRouter in Provider tags with store as an attribute 
          // makes the redux store available to all connected components that are children of app
            <Provider store={store}>
                <BrowserRouter >
                    <div className="App">
                        <Helmet>
                            <title>Host A Heathcare Hero</title>
                            <meta name="description" content="Volunteer to give back to healthcare heroes" />
                            <meta name="theme-color" content="#008f68" />
                        </Helmet>
                        <Main  />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
