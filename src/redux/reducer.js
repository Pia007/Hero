// Implementing Redux reducer
import { SPONSORS } from '../shared/sponsors';
import { MEMBERS } from '../shared/members';

// Object initial state of application from the source data files
export const initialState = {
    sponsors: SPONSORS,
    members: MEMBERS
};

// Reducer function
// uses default state parameters so if there is no state passed in 
// the state gets set to the initialState Object above
// also takes an action as a parmeter
// for now it will return the same state that was passed in without making any changes
export const Reducer = (state = initialState, action) => {
    return state;
};