/**
 * This file handles redux actions and calls rest services using axios.
 * @Author: Sohail Nasim
 */
import { FETCHING, 
            FETCH_USERS, 
            ADD_USER, 
            UPDATE_USER, 
            DELETE_USER, 
            FETCH_USER, 
            CLEAR_ERRORS } from './types';

import axios from 'axios';
import { handleException } from './errors';
import { getURL } from '../../src/env';

const API_URL = getURL();

export const fetchUsers = () => dispatch => {
    dispatch({ type: FETCHING });
    axios.get(`${API_URL}/users`)
    .then(res =>{
      dispatch({
          type: FETCH_USERS,
          data: res.data
      });
    }) 
    .catch(err=> {
        handleException(dispatch, err);
    });
};

export const deleteUser = (username) =>  dispatch => {
    dispatch({ type: FETCHING });
    axios.delete(`${API_URL}/users/${username}`)
      .then(res =>{
        dispatch({
            type: DELETE_USER,
            data: username
        });
      }) 
      .catch(err=> {
        handleException(dispatch, err);
      });
}

export const addUser = (user) => dispatch => {
    dispatch({ type: FETCHING });
    axios.post(`${API_URL}/users`, user)
      .then(res =>{
        dispatch({
            type: ADD_USER,
            data: res.data
        });
      }) 
      .catch(err=> {
        handleException(dispatch, err);
      });
};

export const updateUser = (user) => dispatch => {
    dispatch({ type: FETCHING });
    axios.patch(`${API_URL}/users/${user.username}`, user)
      .then(res =>{
        dispatch({
            type: UPDATE_USER,
            data: res.data
        });
      }) 
      .catch(err=> {
        handleException(dispatch, err);
      });
};

export const fetchUser = (username) => dispatch => {
    dispatch({ type: FETCHING });
    axios.get(`${API_URL}/users/${username}`)
    .then(res =>{
      dispatch({
          type: FETCH_USER,
          data: res.data
      });
    }) 
    .catch(err=> {
        handleException(dispatch, err);
    });
};

export const clearErrors = () => dispatch => {
    dispatch({ type: CLEAR_ERRORS });
}