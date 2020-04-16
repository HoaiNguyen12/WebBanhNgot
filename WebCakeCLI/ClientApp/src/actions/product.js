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

