// Create Members reducer - splitting reducer.js, note where the file path is
import { MEMBERS } from "../shared/members";

export const Members = (state = MEMBERS, actions) => {
    switch (actions.type) {
        default:
            return state;
    }
}  