import { combineReducers } from 'redux';
import products from './product';
import categories from './categories';
import cart from './cart';
import login from './login';

const myReducer = combineReducers({
    products,
    categories,
    cart,
    login
});

export default myReducer;