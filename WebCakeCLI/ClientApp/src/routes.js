
import Home from './components/Home/Home';
import MenuProduct from './components/Product/MenuProduct';
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import CheckoutContainer from './containers/CheckoutContainer';
import React from 'react';
import CartContainer from './containers/CartContainer';

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
        main : () => <CheckoutContainer />
    },
    {
        path : '/login',
        exact : false,
        main : () => <Login/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound/>
    }
];

export default routes;