
import Home from './components/Home/Home';
import MenuProduct from './components/Product/MenuProduct';
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Login from './components/Login/Login';
import LoginAdmin from './components/Admin/LoginAdmin/LoginAdmin';
import Registration from './components/Login/Registration';
import NotFound from './components/NotFound/NotFound';
import Checkout from './components/Checkout/Checkout';
import React from 'react';
import CartContainer from './containers/CartContainer';
import ProductList from './components/Admin/ProductManagement/ProductList';
import ProductForm from './components/Admin/ProductManagement/ProductForm';
import UserList from './components/Admin/UserManagement/UserList';
import UserForm from './components/Admin/UserManagement/UserForm';
import CategoryList from './components/Admin/CategoryManagement/CategoryList';
import CategoryForm from './components/Admin/CategoryManagement/CategoryForm';
import OrderList from './components/Admin/OrderManagement/OrderList';
import OrderForm from './components/Admin/OrderManagement/OrderForm';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home/>
    },
    {
        path : '/menu',
        exact : false,
        main : () => <MenuProduct/>
    },
    {
        path : '/contact',
        exact : false,
        main : () => <Contact/>
    },
    {
        path : '/about',
        exact : false,
        main : () => <About/>
    },
    {
        path : '/product/:id',
        exact : false,
        main : ({match}) => <Product match={match}/>
    },
    {
        path : '/cart',
        exact : false,
        main : () => <CartContainer />
    },
    {
        path : '/checkout',
        exact : false,
        main : () => <Checkout />
    },
    {
        path : '/login',
        exact : false,
        main : () => <Login/>
    },
    {
        path : '/registration',
        exact : false,
        main : () => <Registration />
    },
    {
        path: '/productList',
        exact: false,
        main: () => <ProductList />
    },
    {
        path: '/admin/login',
        exact: false,
        main: () => <LoginAdmin />
    },,
    {
        path: '/admin/userList',
        exact: false,
        main: () => <UserList />
    },
    {
        path: '/admin/userForm',
        exact: false,
        main: ({history}) => <UserForm history={history}/>
    },
    {
        path : '/userForm/:id',
        exact : false,
        main : ({match, history}) => <UserForm match={match} history={history}/>
    },
    {
        path: '/admin/productList',
        exact: false,
        main: () => <ProductList />
    },
    {
        path: '/admin/product/:type/:id',
        exact: false,
        main: ({ match }) => <ProductForm match={match} />
    },
    {
        path: '/admin/categoryList',
        exact: false,
        main: () => <CategoryList />
    },
    {
        path: '/admin/category/:type/:id',
        exact: false,
        main: (match) => <CategoryForm match={match}/>
    },
    {
        path: '/admin/orderList',
        exact: false,
        main: () => <OrderList />
    },
    {
        path: '/admin/orderForm',
        exact: false,
        main: () => <OrderForm />
    },
    {
        path : '/orderForm/:id',
        exact : false,
        main : ({match, history}) => <OrderForm match={match} history={history}/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound/>
    }
];

export default routes;