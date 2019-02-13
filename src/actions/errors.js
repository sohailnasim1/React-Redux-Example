/**
 * Utility class for handling exceptions
 * @Author: Sohail Nasim
 */
import { HANDLE_ERROR } from './types';

export const errors = {
    404: {
        code: 409,
        message: 'Username does not exists'
    },
    409: {
        code: 409,
        message: 'Username already exists'
    },
    111: {
        code:111,
        message: 'Server error'

    }
};

const GENERAL_ERROR = 111;

export const getErrorCode = (err) => {
    let errorCode = GENERAL_ERROR;
    if (err.response && err.response.status) {
        errorCode = err.response.status;
    }
    return errorCode;
};

export const handleException = (dispatch, err) => {
    dispatch({
        type: HANDLE_ERROR,
        data: errors[getErrorCode(err)]
        });
};