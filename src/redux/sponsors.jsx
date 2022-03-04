// Created Sponsor reducer - splitting reducer.js, note where the file path is
// Update reducer to use action type 
import * as ActionTypes from './ActionTypes';

export const Sponsors = (state = {
        isLoading: true,
        errMess: null,
        sponsors: []
        }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SPONSORS:
            return {...state, isLoading: false, errMess: null, sponsors: action.payload};
        case ActionTypes.SPONSORS_LOADING:
            return {...state, isLoading: true, errMess: null, sponsors: []};
        case ActionTypes.SPONSORS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
}  