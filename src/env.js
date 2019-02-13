const API_URL='http://localhost:8888';
//const API_URL='https://user-admin-sb.herokuapp.com';

export const getURL = () => {
    if (process.env.NODE_ENV==='development') {
        return API_URL;
    }
    return null;
}