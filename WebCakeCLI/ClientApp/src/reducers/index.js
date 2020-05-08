import { combineReducers } from 'redux';
import products from './product';
import categories from './categories';
import cart from './cart';

const myReducer = combineReducers({
    products,
    categories,
    cart
});

export default myReducer;