import {MEDIA, LOAD_MEDIA} from "../actions/media";

import {PENDING, FULFILLED, REJECTED} from "../api/middleware";

export function media(state={}, action) {
    switch (action.type) {
        case LOAD_MEDIA + FULFILLED:
            return [...state, action.payload.data];
            break;
        default:
            return state;
    }
}
