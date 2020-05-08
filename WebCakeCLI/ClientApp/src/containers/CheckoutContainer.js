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
            id: '',
            name: '',
            phone: '',
            address: '',
            note: '',
            pay: ''
        };
    }

    render(){
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
            id: data.id,
            name: data.name,
            phone: data.phone,
            address: data.address,
            note: data.note,
            pay: data.pay
       });
    };
    

    showCustomerInfo = () => { 
        return (
            <CustomerInfo onHandleChange={this.handleChange}/>
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
        cart: state.cart
        
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onPayment: (payment,cart) => {
            dispatch(actPaymentRequest(payment, cart));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);

