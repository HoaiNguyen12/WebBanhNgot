import * as types from '../contraints/index';
var initState = {
    id: 0,
    Name: "",
    Password: ""
}

const login = (state = initState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return [...state];
        default:
            return [...state];
    }
}

export default login;