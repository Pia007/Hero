// Create ActionCreators.jsx:
import * as ActionTypes from './ActionTypes';
import { SPONSORS } from '../shared/sponsorsData';
import { MEMBERS } from '../shared/membersData';
import { FAQS } from '../shared/faqsData'; 
import { VOLUNTEERS } from '../shared/volunteersData'; 

// Fetches sponsors from the store
export const fetchSponsors = () => dispatch => {
    dispatch(sponsorsLoading());
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

export const fetchFaqs = () => dispatch => {
    dispatch(faqsLoading());
    dispatch(addFaqs(FAQS));
}

export const faqsLoading = () => ({
    type: ActionTypes.FAQS_LOADING
});

export const faqsFailed = errMess => ({
    type: ActionTypes.FAQS_FAILED,
    payload: errMess
});

export const addFaqs = faqs => ({
    type: ActionTypes.ADD_FAQS,
    payload: faqs

});



export const fetchVolunteers = () => dispatch => {
    dispatch(volunteersLoading());
    dispatch(addVolunteers(VOLUNTEERS));
}

export const volunteersLoading = () => ({
    type: ActionTypes.VOLUNTEERS_LOADING
});

export const volunteersFailed = errMess => ({
    type: ActionTypes.VOLUNTEERS_FAILED,
    payload: errMess
});

export const addVolunteers = volunteers => ({
    type: ActionTypes.ADD_VOLUNTEERS,
    payload: volunteers

});
