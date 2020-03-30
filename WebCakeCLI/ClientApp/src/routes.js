
import Home from './components/Home/Home';
import MenuProduct from './components/Product/MenuProduct';
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import React from 'react';

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
        path : '',
        exact : false,
        main : () => <NotFound/>
    }
];

export default routes;