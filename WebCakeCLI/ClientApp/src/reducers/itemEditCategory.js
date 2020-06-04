import * as types from '../contraints/index';

var initState = [];

const itemEditCategory = (state = initState, action) => {
    switch (action.type) {
        case types.GET_CATEGORY:
            return action.payload;
        default :
            return state;
    }

}

export default itemEditCategory;