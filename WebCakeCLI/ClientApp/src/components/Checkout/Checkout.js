import React, { Component } from 'react';
import Header from './../Template/Header';
import Footer from './../Template/Footer';
import Contact from '../Home/Contact';
import { connect } from 'react-redux';

class Checkout extends Component {
    render() {
        var { children, cart } = this.props;
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
                            <div className="row" style={{marginTop:'20px',color:'black',fontSize:'18px'}}>
                                { children[0]}
                                <div className="col-md-5 order-md-2 mb-4" style={{fontSize:'20px',color:'black'}}>
                                    <h2 className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted">Đơn hàng của bạn</span>
                                        <span className="badge badge-secondary badge-pill"></span>
                                    </h2>
                                    <ul className="list-group mb-3" >
                                       { children[1]}
                                    </ul>
                                    <div className="list-group-item d-flex justify-content-between">
                                        <span>Tổng tiền</span>
                                        <strong> {this.showTotalAmount(cart)}VNĐ</strong>
                                    </div>
                                    <hr />
                                    <button className="btn btn-primary btn-lg btn-block" type="submit" > 
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
        e.preventDefault();
        var payment = {
            fullName: this.props.login.fullName,
            userPhone: this.props.login.userPhone,
            userAddress: this.props.login.userAddress,
            note: this.props.payment.note,
            pay: this.props.payment.pay,
            cart: this.props.cart
        };
        this.props.onPayment(payment);
    }
}


var mapStateToProps = state => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, null)(Checkout);
