//WK 4 implementing redux- adding our first redux related code
// This moves responsiblity of state from main component to redux
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

// Object initial state of application from the source data files
export const initialState = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS
};

// Reducer function
// uses default state parameters so if there is no state passed in 
// the state gets set to the initialState Object above
// also takes an action as a parmeter
// for now it will return the same state that was passed in without making any changes
export const Reducer = (state = initialState, action) => {
    return state;
};