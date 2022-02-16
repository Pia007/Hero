// import statements for createStore, Reducer and initialState 
import { combineReducers, createStore } from 'redux';
// import { Reducer, initialState } from './reducer';
// import the reducers, NOT the data files
import { Sponsors } from './sponsors';
import { Members } from './members';

// ConfigureStore uses the createStore function to create a store
// combineReducers is used to combine the reducers -- now delete reducer.js remove reducer & initialState imports above
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            sponsors: Sponsors,
            members: Members
        })
    );

    return store;
};