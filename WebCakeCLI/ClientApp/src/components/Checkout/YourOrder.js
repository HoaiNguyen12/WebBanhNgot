import React, { Component } from 'react';
import CartItem from './CartItem';

class YourOrder extends Component {

    render() {
        var { cart } = this.props;
        
        return (
            <div>
                {this.showCartItem(cart)}   
            </div>
                 
        );
    }

    showCartItem = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                    />
                )
            });
        }
        return result;
    }
}

export default YourOrder;
