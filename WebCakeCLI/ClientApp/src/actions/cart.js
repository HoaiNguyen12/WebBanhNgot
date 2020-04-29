import * as types from '../contraints/index';
import callApi from './../utils/apiCaller';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDeleteProductInCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart = (product,quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}

export const actFetchProductInCartRequest = (cart) => {
    return (dispatch) => {
        return callApi('cart','GET', cart).then(res => {
//            dispatch(actFetchProductInCart(res.data));
        });
    };
}

export const actFetchProductInCart = (cart) => {
    return {
        type: types.FETCH_PRODUCT_IN_CART,
        cart
    };
}