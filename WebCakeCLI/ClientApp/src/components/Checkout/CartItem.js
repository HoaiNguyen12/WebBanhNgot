import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        var { item } = this.props;
        var { quantity } = item;
        return (
            
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                    <h4 className="my-0" >{ item.product.productName }</h4>
                        <small className="text-muted">{ item.product.productPrice}VNĐ x {quantity}</small>
                        
                </div>
                <span className="text-muted">{this.showSubTotal(item.product.productPrice, item.quantity)}VNĐ</span>
                </li>            
        );
    }
     
    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
}

export default CartItem;
