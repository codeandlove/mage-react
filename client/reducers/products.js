import {PRODUCTS, LOAD_PRODUCTS} from "../actions/products";

import {PENDING, FULFILLED, REJECTED} from "../api/middleware";

export function products(state={}, action) {
    switch (action.type) {
        case LOAD_PRODUCTS + FULFILLED:
            return {
                items: (!state.items) ? action.payload.data.items : state.items.concat([...state.items], action.payload.data.items),
                search_criteria: action.payload.data.search_criteria,
                total_count: action.payload.data.total_count
            };
            break;
        default:
            return state;
    }
}
