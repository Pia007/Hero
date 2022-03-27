import * as ActionTypes from './ActionTypes';

export const Faqs = (state = {
        isLoading: true,
        errMess: null,
        faqs: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAQS:
            return {...state, isLoading: false, errMess: null, faqs: action.payload};
        default:
            return state;
    }
}  