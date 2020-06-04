import * as types from '../contraints/index';
import callApi from '../utils/apiCaller';

export const actFetchLoginRequest = (login) => {
    console.log(login);
    return (dispatch) => {
        return callApi("Users/checkUser", "POST", login).then(res => {
            console.log(res);
            if (res.data.userName && res.data.isAdmin == 0) {
                dispatch(actFetchLogin(res.data))
            }
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

export const actFetchLoginAdminRequest = (login) => {
    console.log(login);
    return (dispatch) => {
        return callApi("Users/checkAdmin", "POST", login).then(res => {
            console.log(res);
            if (res.data.userName && res.data.isAdmin == 1) {
                dispatch(actFetchLoginAdmin(res.data))
            }
        }).catch(e => {
            console.log(e);
        });
    }
}

export const actFetchLoginAdmin = (user) => {
    return {
        type: types.LOGIN,
        user: user
    }
}


export const actLogout = () => {
    return {
        type: types.LOGOUT
    }
}


export const actRegistrationRequest = (user) => {
    return (dispatch) => {
        return callApi("Users/registration", "POST", user).then(res => {
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