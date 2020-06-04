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

export const actFetchCategory = (categories) => {
    return {
        type: types.FETCH_CATEGORY,
        payload: categories
    }
}

export const actGetCategoryRequest = (id) => {
    return (dispatch) => {
        return callApi("categories/" + id, "GET", null).then(res => {
            //console.log(res);
            dispatch(actGetCategory(res.data))
        });
    }
}

export const actGetCategory = (category) => {
    return {
        type: types.GET_CATEGORY,
        payload: category
    }
}

export const actAddCategoryRequest = (category) => {
    return (dispatch) => {
        return callApi("categories", "POST", category).then(res => {
            //console.log(res);
            dispatch(actAddCategory(category))
        });
    }
}

export const actAddCategory = (category) => {
    return {
        type: types.ADD_CATEGORY,
        category: category
    }
}

export const actDeleteCategoryRequest = (id) => {
    return (dispatch) => {
        return callApi("categories/" + id, "DELETE", null).then(res => {
            //console.log(res);
            dispatch(actDeleteCategory(id))
        });
    }
}

export const actDeleteCategory = (id) => {
    return {
        type: types.DELETE_CATEGORY,
        id: id
    }
}

export const actEditCategoryRequest = (category) => {
    return (dispatch) => {
        return callApi("categories/" + category.categoryId, "PUT", category).then(res => {
            //console.log(res);
            dispatch(actEditCategory(res.data))
        });
    }
}

export const actEditCategory = (category) => {
    return {
        type: types.EDIT_CATEGORY,
        category: category
    }
}

