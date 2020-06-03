import * as types from '../contraints/index';

var initState = [];

const itemEditUser = (state = initState, action) => {
    switch (action.type) {
        case types.EDIT_USER:
            return action.user;
        default :
            return state;
    }

}

export default itemEditUser;