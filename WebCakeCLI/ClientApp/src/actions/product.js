import * as types from '../contraints/index';
import callApi from '../utils/apiCaller';

export const listAll = () => {
    return {
        type : types.GET_ALL_PRODUCT
    }
}


export const actFetchProductRequest = () => {
    return (dispatch) => {
        return callApi("products", "GET", null).then(res => {
            //console.log(res);
            dispatch(actFetchProduct(res.data))
        });
    }
}

export const actFetchProduct = (products) => {
    return {
        type : types.FETCH_PRODUCT,
        payload : products
    }
}