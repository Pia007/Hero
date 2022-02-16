// Created Sponsor reducer - splitting reducer.js, note where the file path is
import { SPONSORS } from "../shared/sponsors";

export const Sponsors = (state = SPONSORS, actions) => {
    switch (actions.type) {
        default:
            return state;
    }
}  