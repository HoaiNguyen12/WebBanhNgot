import * as types from '../contraints/index';

var initState = [];

const product = (state = initState, action) => {
    switch (action.type) {
        case types.FETCH_CATEGORY:
            state = action.payload;
            return [...state];
        default:
            return [...state]
    }

}

export default product;