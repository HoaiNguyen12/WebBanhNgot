import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout/Checkout';
import YourOrder from '../components/Checkout/YourOrder';
import CustomerInfo from '../components/Checkout/CustomerInfo';
import { actPaymentRequest } from './../actions/cart';

class CheckoutContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            userPhone: '',
            userAddress: '',
            note: '',
            pay: ''
        };
    }

    render() {
       var { cart, onPayment } = this.props;
        return (
            <Checkout onPayment={onPayment} cart={cart} payment={ this.state}>
               { this.showCustomerInfo()}
                { this.showCartItem(cart)}
            </Checkout>
        );
    }
    
    handleChange = (data) => {
        this.setState({
            fullName: this.props.login.fullName,
            userPhone: this.props.login.userPhone,
            userAddress: this.props.login.userAddress,
            note: data.note,
            pay: data.pay
       });
    };
    

    showCustomerInfo = () => { 
        return (
            <CustomerInfo onHandleChange={this.handleChange} login={this.props.login}/>
        )
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
        cart: state.cart,
        login: state.login
        
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onPayment: (payment) => {
            dispatch(actPaymentRequest(payment));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);

