/**
 * root reducer
 * @Author: Sohail Nasim
 */
import { combineReducers } from 'redux';
import UserAdminReducers from './UserAdminReducer';

export default combineReducers (
    { userAdmin: UserAdminReducers }
)