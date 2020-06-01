import * as types from '../contraints/index';
import callApi from '../utils/apiCaller';

export const actFetchLoginRequest = (login) => {
    console.log(login);
    return (dispatch) => {
        return callApi("users/checkUser", "POST", login).then(res => {
            console.log(res);
            dispatch(actFetchLogin(res.data))
        }).catch(e => {
            console.log(e);
        });
    }
}

export const actFetchLogin = (user) => {
    return {
        type: types.LOGIN,
        user: user
    }
}