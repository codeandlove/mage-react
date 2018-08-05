import axios from 'axios';
import queryString from 'query-string';
import { LOAD_ALL_INITIAL_ACTIONS_FINISHED } from '../actions/initial';

export const API = Symbol('API');

export const PENDING = '_PENDING';
export const REJECTED = '_REJECTED';
export const FULFILLED = '_FULFILLED';

const requestDefaultState = {
    loading: false,
    error: null
};

export function request(state = requestDefaultState, action) {

    if(action.type === LOAD_ALL_INITIAL_ACTIONS_FINISHED) {
        return Object.assign({}, state, {initialLoading: false});
    }

    if(action.type.endsWith(PENDING)) {
        return Object.assign({}, state, {loading: true});
    }

    if(action.type.endsWith(REJECTED)) {
        return Object.assign({}, state, {loading: false, error: action.payload.message});
    }

    if(action.type.endsWith(FULFILLED)) {
        return Object.assign({}, state, {loading: false, error: null});
    }

    return state;
}

export default store => next => action => {

    if (!action[API]) {
        return next(action);
    }

    let axios_result = null;

    switch(action[API].method) {
        case 'get':
            axios_result = axios.get(action[API].url, {params: action[API].params});
        break;
        case 'post':
            axios_result = axios.post(action[API].url, action[API].data);
        break;
        case 'put':
            axios_result = axios.put(action[API].url, action[API].data);
        break;
        case 'delete':
            axios_result = axios.delete(action[API].url);
        break;
    }

    store.dispatch({
       type: action.type,
       payload: axios_result
    }).then(request => {
        if(action.callback) {
            return action.callback(request.value);
        }
    });

}