import * as types from '../contraints/index';
var initState = []
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
            return [...state];
        default:
            return [...state];
    }
}

export default login;