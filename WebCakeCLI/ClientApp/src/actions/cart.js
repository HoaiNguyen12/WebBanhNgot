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

export const actPaymentRequest = (payment,cart) => {
    return (dispatch) => {
        return callApi('checkout','POST', {
           payment,
           cart
        }).then(res => {
            dispatch(actPayment(res.data.payment, res.data.cart));
        });
    };
}
export const actPayment = (payment,cart) => {
    return {
        type: types.PAYMENT_CART,
        payment,
        cart
    }
}
