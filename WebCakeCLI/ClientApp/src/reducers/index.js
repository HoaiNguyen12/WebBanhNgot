import { combineReducers } from 'redux';
import products from './product';
import categories from './categories';
import cart from './cart';
import login from './login';
import bills from './bill';
import users from './user';
import itemEditBill from './itemEditBill';
import itemEditUser from './itemEditUser';
import itemEditProduct from './itemEditProduct';
import itemEditCategory from './itemEditCategory';

const myReducer = combineReducers({
    products,
    categories,
    cart,
    login,
    bills,
    users,
    itemEditBill,
    itemEditUser,
    itemEditProduct,
    itemEditCategory
});

export default myReducer;