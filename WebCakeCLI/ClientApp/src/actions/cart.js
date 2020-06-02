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

export const actPaymentRequest = (payment) => {
    debugger;
    return (dispatch) => {
        return callApi('checkout','POST', {
           payment
        }).then(res => {
            dispatch(actPayment(res.data));
        });
    };
}
export const actPayment = (payment) => {
    return {
        type: types.PAYMENT_CART,
        payment
    }
}
