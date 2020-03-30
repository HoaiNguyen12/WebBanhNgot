import * as types from '../contraints/index';

export const listAll = () => {
    return {
        type : types.GET_ALL_PRODUCT
    }
}

export const actFetchProduct = (products) => {
    return {
        type : types.FETCH_PRODUCT,
        payload : products
    }
}