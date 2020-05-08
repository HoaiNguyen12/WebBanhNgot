import * as types from './../contraints/index';

var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 7',
            price: 12000
        },
        quantity: 1
    },
    {
        product: {
            id: 2,
            name: 'Iphone 6',
            price: 8000
        },
        quantity: 2
    }
];

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity += quantity;
            }else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_CART:
            state.splice(state[0], state.length);
            localStorage.removeItem('CART');
            return [...state];
        default: return [...state];
    }
}

var findProductInCart = (cart, product) =>{
    var index = -1;
    if(cart.length > 0){
        for(var i = 0; i < cart.length; i++){
            if(cart[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;