import * as types from '../contraints/index';
import callApi from '../utils/apiCaller';

export const actFetchLoginRequest = (login) => {
    return (dispatch) => {
        return callApi("users/checkUser", "POST", login).then(res => {
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

export const actRegistrationRequest = (user) => {
    return (dispatch) => {
        return callApi("users/registration", "POST", user).then(res => {
            console.log(res);
            dispatch(actRegistration(res.data))
        });
    }
}

export const actRegistration = (user) => {
    return {
        type: types.REGISTRATION,
        user
    }
}