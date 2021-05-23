// Any changes made to state will have to go through the reducer
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS

} from '../types';

export default (state, action)=>{
    switch(action.type)
    {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            };
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case SET_LOADING:
            //we have to return whatever is already in the state, state is immutable and we cant re-assign it 
            //we have to make a copy of it and make any additions or changes to it
            // the spread operator "..." is used to make a copy
            return {
                ...state,
                loading: true
            };
        default:
            return state;
        
    }
}