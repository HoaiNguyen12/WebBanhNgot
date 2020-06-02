import * as types from '../contraints/index';
import callApi from '../utils/apiCaller';


export const actFetchProductCategoryRequest = (id) => {
    return (dispatch) => {
        return callApi("categories/" + id, "GET", null).then(res => {
            //console.log(res);
            dispatch(actFetchProductCategory(res.data))
        });
    }
}

export const actFetchProductCategory = (products) => {
    return {
        type : types.FETCH_PRODUCT,
        payload : products
    }
}



export const actFetchDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi("products/" + id, "DELETE", null).then(res => {
            console.log(id);
            dispatch(actFetchDeleteProduct(id))
        });
    }
}

export const actFetchDeleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        productID: id
    }
}

