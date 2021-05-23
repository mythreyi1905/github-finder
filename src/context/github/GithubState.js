//Our initial state,
import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS

} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

}

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading :false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users 
    const searchUsers = async text => {
    setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        //dispatches type of search_users and the payload to the reducer which inturn puts the payload into the state and sends it down to any component needed
        dispatch({
            type: SEARCH_USERS,
            payload : res.data.items
        });
  }
        // Get User 
        const getUser = async (username) => {
            setLoading();
            const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
            dispatch({
                type: GET_USER,
                payload:res.data
            })
          };

        //Get Repos
        const getUserRepos = async (username) => {
            setLoading();
            const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
            dispatch({
                type: GET_REPOS,
                payload : res.data
            })
          };
        
    // Clear Users

    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    //Set Loading
    //It dispatches the type of setloading to the reducer , in this case there is no payload
    const setLoading = () => dispatch({type:SET_LOADING})


    return <GithubContext.Provider
        //anything we want to be available in the app level state, we have to add to this value
        value={{
            users: state.users,
            user:state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos

    }}
    >

{props.children}
    </GithubContext.Provider>
}

export default GithubState;