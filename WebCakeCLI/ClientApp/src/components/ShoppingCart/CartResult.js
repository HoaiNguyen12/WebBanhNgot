import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartResult extends Component {

    render() {
        var { cart } = this.props;
        return (
            <tr style={{fontSize:'18px'}}>
                <td colSpan="3">
                </td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(cart)}VNĐ</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <Link to="/checkout" className="btn btn-primary ">Mua hàng
                    <i className="fa fa-angle-right right"></i>
                    </Link>
                </td>
            </tr>

        );
    }

    onDeleteAll = (cart) => {
        var { onDeleteAllCart} = this.props;
        onDeleteAllCart(cart);
    }

    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.productPrice * cart[i].quantity;
            }
        }
        return total;
    }

}

export default CartResult;
