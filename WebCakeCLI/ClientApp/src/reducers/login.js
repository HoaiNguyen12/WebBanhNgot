import * as types from '../contraints/index';
var user = JSON.parse(localStorage.getItem("user"));
var initState = user != null ? user : {};
    //userId: 0,
    //userName: "",
    //password: "",
    //fullName: "",
    //email: ""
//}

const login = (state = initState, action) => {
    switch (action.type) {
        case types.LOGIN:
            state = action.user;
            localStorage.setItem("user", JSON.stringify(state));
            return state;
        case types.REGISTRATION:
            //state.push(action.user);
            return state;
        case types.LOGOUT:
            localStorage.removeItem("user");
            state = {};
            return state;
        default:
            return state;
    }
}

export default login;