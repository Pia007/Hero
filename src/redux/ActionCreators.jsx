// Create ActionCreators.jsx:
import * as ActionTypes from './ActionTypes';
import { SPONSORS } from '../shared/sponsors';
import { MEMBERS } from '../shared/members';

// Fetches sponsors from the store
export const fetchSponsors = () => dispatch => {
    dispatch(sponsorsLoading());
    dispatch(sponsorsFailed());
    dispatch(addSponsors(SPONSORS));
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

//added dipatch members failed
export const fetchMembers = () => dispatch => {
    dispatch(membersLoading());
    dispatch(membersFailed());
    dispatch(addMembers(MEMBERS));
}

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


