import * as types from '../contraints/index';

var initState = [];

const category = (state = initState, action) => {
    switch (action.type) {
        case types.FETCH_CATEGORY:
            state = action.payload;
            return [...state];
        case types.DELETE_CATEGORY:
            var index = findCategory(state, action.id);
            if (index != -1) {
                state.splice(index, 1);
            }
            return [...state];
        case types.EDIT_CATEGORY:
            var index = findCategory(state, action.id);
            if (index != -1) {
                state[index] = action.category;
            }
            return [...state];
        default:
            return [...state];
    }

}

var findCategory = (categories, id) => {
    var index = -1;
    if (categories.length > 0) {
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].categoryId === id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default category;