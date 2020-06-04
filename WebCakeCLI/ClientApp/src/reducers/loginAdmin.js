import * as types from '../contraints/index';
var admin = JSON.parse(localStorage.getItem("admin"));
var initState = admin != null ? admin : {};

const loginAdmin = (state = initState, action) => {
    switch (action.type) {
        case types.LOGIN_ADMIN:
            state = action.admin;
            localStorage.setItem("admin", JSON.stringify(state));
            return state;
        case types.LOGOUT_ADMIN:
            localStorage.removeItem("admin");
            state = {};
            return state;
        default:
            return state;
    }
}
export default loginAdmin;