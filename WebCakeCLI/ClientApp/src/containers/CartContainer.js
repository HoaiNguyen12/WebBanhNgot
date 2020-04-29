import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/ShoppingCart/Cart';
import CartItem from './../components/ShoppingCart/CartItem';
import CartResult from './../components/ShoppingCart/CartResult';
import { actDeleteProductInCart, actUpdateProductInCart, actFetchProductInCartRequest } from './../actions/cart';
import * as Message from './../contraints/Message';

class CartContainer extends Component {

    render(){
        var { cart } = this.props;
        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.showTotalAmount(cart)}
            </Cart>
        );
    }

    componentDidMount(){
        var { cart} = this.props;
        this.props.fetchProductInCart(cart);
    }

    showCartItem = (cart) => {
        var { onDeleteProductInCart, onUpdateProductInCart } = this.props;
        var result = <div>{Message.MSG_CART_EMPTY}</div>;
        if(cart.length > 0){
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />    
                )
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

        fetchProductInCart: (cart) => {
            dispatch(actFetchProductInCartRequest(cart));
        },
        onDeleteProductInCart : (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onUpdateProductInCart : (product, quantity) => {
            dispatch(actUpdateProductInCart(product,quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
