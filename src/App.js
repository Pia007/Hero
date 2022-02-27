import React, { Component } from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
// Implementing Redux: Install redux and react-redux
    // import statements for Provider component and the ConfigureStore function
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
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
                        <Main  />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
