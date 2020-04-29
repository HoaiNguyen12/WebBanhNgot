import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout/Checkout';
import YourOrder from '../components/Checkout/YourOrder';

class CheckoutContainer extends Component {

    render(){
       var { cart} = this.props;
        return (
            <Checkout>
                <div className="col-md-5 order-md-2 mb-4" style={{fontSize:'20px',color:'black'}}>
                    <h2 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Đơn hàng của bạn</span>
                        <span className="badge badge-secondary badge-pill"></span>
                    </h2>
                    <ul className="list-group mb-3" >
                        { this.showCartItem(cart)}
                    </ul>
                    <div className="list-group-item d-flex justify-content-between">
                        <span>Tổng tiền</span>
                        <strong>{this.showTotalAmount(cart)}VNĐ</strong>
                    </div>
                    <hr />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                        <i className="fa fa-credit-card"></i> Đặt hàng</button>
                </div>
                
            </Checkout>
        );
    }

    showCartItem = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = cart.map((item, index) => {
                return (
                    <YourOrder
                        key={index}
                        item={item}
                        index={index}
                    />    
                )
            });
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);

