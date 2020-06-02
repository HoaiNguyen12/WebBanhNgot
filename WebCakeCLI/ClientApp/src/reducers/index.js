import { combineReducers } from 'redux';
import products from './product';
import categories from './categories';
import cart from './cart';
import login from './login';
import bills from './bill';

const myReducer = combineReducers({
    products,
    categories,
    cart,
    login,
    bills
});

export default myReducer;