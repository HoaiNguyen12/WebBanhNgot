import * as types from '../contraints/index';

var initState = [];

const itemEditProduct = (state = initState, action) => {
    switch (action.type) {
        case types.DETAIL_PRODUCT:
            return action.product;
        default :
            return state;
    }

}

export default itemEditProduct;