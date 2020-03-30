import { combineReducers } from 'redux';
import products from './product';
import categories from './categories';

const myReducer = combineReducers({
    products,
    categories
})

export default myReducer;