import * as types from '../contraints/index';
import callApi from '../utils/apiCaller';

export const actFetchCategoryRequest = () => {
    return (dispatch) => {
        return callApi("categories", "GET", null).then(res => {
            //console.log(res);
            dispatch(actFetchCategory(res.data))
        });
    }
}

export const actFetchCategory = (categorys) => {
    return {
        type: types.FETCH_CATEGORY,
        payload: categorys
    }
}