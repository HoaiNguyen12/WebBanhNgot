import * as types from './../contraints/index';

var initialState = {
    items: [],
    total : 0
};

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CART:
            index = findProductInCart(state.items, product);
            if(index !== -1){
                state.items[index].quantity += quantity;
            }else {
                state.items.push({
                    product,
                    quantity
                });
            }
            state.total++;
            localStorage.setItem('CART', JSON.stringify(state));
            return state;
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state.items, product);
            if(index !== -1){
                state.items.splice(index,1);
            };
            state.total -= quantity;
            localStorage.setItem('CART',JSON.stringify(state));
            return state;
        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state.items, product);
            if(index !== -1){
                state.items[index].quantity = quantity;
            }
            state.total += quantity;
            localStorage.setItem('CART', JSON.stringify(state));
            return state;
        case types.DELETE_CART:
            state.splice(state.items[0], state.items.length);
            state.total = 0;
            localStorage.removeItem('CART');
            return state;
        default: return state;
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