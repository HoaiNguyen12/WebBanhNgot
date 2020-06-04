import * as types from '../contraints/index';

var initState = {
    categoryId: 0,
    categoryName: ''
};

const itemEditCategory = (state = initState, action) => {
    switch (action.type) {
        case types.EDIT_CATEGORY:
            state = action.category;
            return state;
        default :
            return state;
    }

}

export default itemEditCategory;