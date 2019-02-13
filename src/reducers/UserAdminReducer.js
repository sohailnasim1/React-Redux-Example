/**
 * User admin reducer
 * @Author: Sohail Nasim
 */
import { FETCH_USERS, 
            FETCHING, 
            ADD_USER, 
            UPDATE_USER, 
            DELETE_USER, 
            FETCH_USER, 
            HANDLE_ERROR, 
            CLEAR_ERRORS } from '../actions/types';

const initState = {
    users: [],
    fetching: false,
    user:{},
    errors: null
}

const UserAdminReducer = (state=initState, action) => {
    switch(action.type) {
        case FETCHING:
            return {...state, fetching: true, errors:{}}
        case FETCH_USERS:
            return {...state, users:action.data, fetching: false, errors:null} 
        case DELETE_USER:
            return {...state, users:state.users.filter(user=>user.username !== action.data), fetching: false, errors:null}
        case ADD_USER:
            return {...state, users:[...state.users, action.data], fetching: false, errors:null}
        case UPDATE_USER:
            return {...state, users:[...state.users.filter(user=>user.username !== action.data.username), action.data], fetching: false, user:{}, errors:null}
        case FETCH_USER:
            return {...state,  user: action.data,  fetching: false, errors:null}
        case HANDLE_ERROR:
            return {...state,   errors:action.data, fetching: false}
        case CLEAR_ERRORS:
            return {...state,   errors:null, fetching: false}
        default: 
            return state;
    }
};

export default UserAdminReducer;