import * as types from '../contraints/index';
import callApi from '../utils/apiCaller';


export const actFetchUsersRequest = () => {
    return (dispatch) => {
        return callApi('users','GET', null).then(res => {
            dispatch(actFetchUsers(res.data));
        });
    }; 
}

export const actFetchUsers = (users) =>{
    return {
        type: types.FETCH_USER,
        users
    };
}

export const actFetchDeleteUserRequest = (id) => {
    return (dispatch) => {
        return callApi("users/" + id, "DELETE", null).then(res => {
            dispatch(actFetchDeleteUser(id))
        });
    }
}

export const actFetchDeleteUser = (id) => {
    return {
        type: types.DELETE_USER,
        userId: id
    }
}

export const actAddUserRequest = (user) => {
    return dispatch => {
        return callApi('users', 'POST', user).then(res => {
            dispatch(actAddUser(res.data))
        });
    }
}

export const actAddUser = (user) =>{
    return {
        type: types.ADD_USER,
        user
    };
}


export const actGetUserRequest = (id) => {
    return dispatch => {
        return callApi(`users/${id}`,'GET', null).then(res => {
            dispatch(actGetUser(res.data));
        });
    }
}

export const actGetUser = (user) => {
    return {
        type: types.EDIT_USER,
        user
    }
}

export const actUpdateUserRequest = (user)  => {
    return dispatch => {
        return callApi(`users/${user.userId}`,'PUT', user).then(res => {
            dispatch(actUpdateUser(res.data));
        });
    }
}

export const actUpdateUser = (user) => {
    return {
        type: types.UPDATE_USER,
        user
    }
}

