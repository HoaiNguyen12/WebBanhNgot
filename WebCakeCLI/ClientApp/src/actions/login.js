import * as types from '../contraints/index';
import callApi from '../utils/apiCaller';

export const actFetchLoginRequest = (login) => {
    return (dispatch) => {
        return callApi("user", "GET", login).then(res => {
            console.log(res);
            dispatch(actFetchLogin(res.data))
        });
    }
}

export const actFetchLogin = (user) => {
    return {
        type: types.LOGIN,
        user: user
    }
}