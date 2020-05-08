import React, { Component } from 'react';

class YourOrder extends Component {

    render() {
        var { item } = this.props;
        var { quantity } = item;
        return (
            
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">{ item.product.name }</h6>
                        <small className="text-muted">{ item.product.price}VNĐ x {quantity}</small>
                        
                    </div>
                    <span className="text-muted">{ this.showSubTotal(item.product.price, item.quantity) }VNĐ</span>
                </li>
                
                                  
        );
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
}

export default YourOrder;
