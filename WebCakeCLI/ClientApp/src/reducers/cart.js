import * as types from './../contraints/index';

var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data != null ? data : [];

const cart = (state = initialState, action) => {
    //debugger;
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
            return state;
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index,1);
            };
            localStorage.setItem('CART',JSON.stringify(state));
            return state;
        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return state;
        case types.DELETE_CART:
            state.splice(state[0], state.length);
            localStorage.removeItem('CART');
            return state;
        case types.PAYMENT_CART:
            return state;
        default: return state;
    }
}

var findProductInCart = (cart, product) =>{
    var index = -1;
    if(cart.length > 0){
        for(var i = 0; i < cart.length; i++){
            if (cart[i].product.productId === product.productId){
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;