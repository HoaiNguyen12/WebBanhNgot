import * as types from '../contraints/index';

var initState = [];

const users = (state = initState, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            state = action.users;
            return [...state];
        case types.DELETE_USER:
            var index = findUser(state, action.userId);
            if (index != -1) {
                state.splice(index, 1);
            }
            return [...state];
        case types.ADD_USER:
            state.push(action.user);
            return [...state];
        case types.UPDATE_USER: 
            var index = findUser(state, action.user.userId);
            if(index != -1){
                state[index] = action.user;
            }
            return [...state];
        default :
            return [...state]
    }

}
var findUser = (users, id) => {
    var index = -1;
    if (users.length > 0) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].userId === id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default users;