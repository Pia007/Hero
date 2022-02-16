// Create ActionCreators.jsx:
import * as ActionTypes from './ActionTypes';
import { SPONSORS } from '../shared/sponsors';
import { MEMBERS } from '../shared/members';

export const fetchSponsors = () => (dispatch) => {
    dispatchEvent(sponsorsLoading());

    setTimeout(() => {
        dispatch(addSponsors(SPONSORS));
    }, 2000);
};

export const sponsorsLoading = () => ({
    type: ActionTypes.SPONSORS_LOADING
});

export const sponsorsFailed = errMess => ({
    type: ActionTypes.SPONSORS_FAILED,
    payload: errMess
});

export const addSponsors = sponsors => ({
    type: ActionTypes.ADD_SPONSORS,
    payload: sponsors

});



export const fetchMembers = () => (dispatch) => {
    dispatchEvent(membersLoading());

    setTimeout(() => {
        dispatch(addMembers(MEMBERS));
    }, 2000);
};

export const membersLoading = () => ({
    type: ActionTypes.MEMBERS_LOADING
});

export const membersFailed = errMess => ({
    type: ActionTypes.MEMBERS_FAILED,
    payload: errMess
});

export const addMembers = members => ({
    type: ActionTypes.ADD_MEMBERS,
    payload: members

});


