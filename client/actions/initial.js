// import {loadProjects} from './projects';
//
// export const LOAD_ALL_INITIAL_ACTIONS = 'LOAD_ALL_INITIAL_ACTIONS';
// export const LOAD_ALL_INITIAL_ACTIONS_FINISHED = 'LOAD_ALL_INITIAL_ACTIONS_FINISHED';
//
// export const initialActions = [
//     loadProjects()
// ].filter(Boolean);
//
// export function loadAllInitialData() {
//     return dispatch => {
//         return dispatch({
//             type: LOAD_ALL_INITIAL_ACTIONS,
//             payload: Promise.all([
//                 initialActions.map( action => {
//                     dispatch( action );
//                 })
//             ]).then(() => setTimeout(()=> {
//                 dispatch({
//                     type: LOAD_ALL_INITIAL_ACTIONS_FINISHED
//                 });
//             }, 1000))
//         })
//     }
// }
