import { combineReducers } from 'redux';
import products from './product';
import categories from './categories';
import cart from './cart';
import login from './login';
import bills from './bill';
import users from './user';
import itemEditBill from './itemEditBill';
import itemEditUser from './itemEditUser';

const myReducer = combineReducers({
    products,
    categories,
    cart,
    login,
    bills,
    users,
    itemEditBill,
    itemEditUser
});

export default myReducer;