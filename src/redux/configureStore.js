// WK4 - Implementing Redux:
// import statements for createStore, Reducer and initialState 
import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

// ConfigureStore uses the createStore function to create a store
// pass into the createStore function the Reducer function and initialState
// then the function will return the store object
export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
};