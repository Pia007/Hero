import * as ActionTypes from './ActionTypes';

export const Bios = (state = {
                                isLoading: true,
                                errMess: null,
                                bios: []
                                }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BIOS:
            return {...state, isLoading: false, errMess: null, bios: action.payload};
        case ActionTypes.BIOS_LOADING:
            return {...state, isLoading: true, errMess: null, bios: []};
        case ActionTypes.BIOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};