import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Sponsors } from './sponsors';
import { Members } from './members';
import { Faqs } from './faqs';
// import thunk and logger
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// ConfigureStore uses the createStore function to create a store
// combineReducers is used to combine the reducers -- now delete reducer.js remove reducer & initialState imports above
// applyMiddleware is passed in as second argument to createStore
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            sponsors: Sponsors,
            members: Members,
            faqs: Faqs
        }),
        applyMiddleware(thunk, logger)  
    );

    return store;
};