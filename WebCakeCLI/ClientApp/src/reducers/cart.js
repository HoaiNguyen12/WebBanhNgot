import * as types from './../contraints/index';

var initialState = [
    {
        product: {
            id: 1,
            name: 'iphone 7',
            price: 500,
        },
        quantity:3
    },
    {
        product: {
            id: 3,
            name: 'oppo F1',
            price: 400,
        },
        quantity:2
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
            //chỗ này phải viết lưu vào đâu đó, nhưng chưa viết
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index,1);
            }
            //như trên
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity;
            }
            //như trên
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