import * as types from '../contraints/index';

var initState = [];

const product = (state = initState, action) => {
    switch (action.type)
    {
        case types.GET_ALL_PRODUCT:
            return [...state]
        case types.FETCH_PRODUCT:
            state = action.payload;
            return [...state];
        case types.DELETE_PRODUCT:
            var index = findProduct(state, action.productID);
            if (index != -1) {
                state.splice(index, 1);
            }
            return [...state];
        case types.DELETE_PRODUCT:
            var index = findProduct(state, action.productID);
            if (index != -1) {
                state.splice(index, 1);
            }
            return [...state];
        case types.EDIT_PRODUCT:
            var index = findProduct(state, action.productID);
            if (index != -1) {
                state[index] = action.product;
            }
            return [...state];
        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        default :
            return state
    }

}
var findProduct = (product, id) => {
    var index = -1;
    if (product.length > 0) {
        for (var i = 0; i < product.length; i++) {
            if (product[i].productId === id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default product;