import React, { Component } from 'react';
import Header from './../Template/Header';
import Footer from './../Template/Footer';
import Contact from '../Home/Contact';
import CustomerInfo from './CustomerInfo';
import YourOrder from './YourOrder';
import { connect } from 'react-redux';
import { actPaymentRequest } from './../../actions/cart';


class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payment: {
                fullName: '',
                userPhone: '',
                userAddress: '',
                note: '',
                pay: '',
                cart: []
            }
            
        };
    }

    handleChange = (data) => {
        this.setState({
            payment: {
                fullName: data.fullName,
                userPhone: data.userPhone,
                userAddress: data.userAddress,
                note: data.note,
                pay: data.pay,
                cart: this.props.cart
            }
        });
    };

    render() {
        debugger;
        console.log(this.state);
        var { cart } = this.props;
        return (
            <div >
                <Header />
                <div className="all-page-title page-breadcrumb">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Thông tin đặt hàng</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div id="content">
                        <form className="beta-form-checkout" onSubmit={this.onSave}>
                            <div className="row" style={{ marginTop: '20px', color: 'black', fontSize: '18px' }}>
                                <CustomerInfo login={this.props.login} handleChange={this.handleChange} />
                                <div className="col-md-5 order-md-2 mb-4" style={{fontSize:'20px',color:'black'}}>
                                    <h2 className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted">Đơn hàng của bạn</span>
                                        <span className="badge badge-secondary badge-pill"></span>
                                    </h2>
                                    <ul className="list-group mb-3" >
                                        <YourOrder cart={this.props.cart} />
                                    </ul>
                                    <div className="list-group-item d-flex justify-content-between">
                                        <span>Tổng tiền</span>
                                        <strong> {this.showTotalAmount(cart)}VNĐ</strong>
                                    </div>
                                    <hr />
                                    <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.onClick}> 
                                                <i className="fa fa-credit-card"></i> Đặt hàng</button>
                                </div>
                            </div>
                             
			            </form> 
                    </div> 
	            </div>
                <Contact />
                <Footer />
            </div>
        );
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

    onSave = (e) => {
        console.log(this.state);
        e.preventDefault();
        this.props.onPayment(this.state.payment);
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
