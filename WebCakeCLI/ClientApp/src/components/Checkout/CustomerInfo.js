import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actPaymentRequest } from './../../actions/cart';

class CustomerInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: this.props.login.fullName,
            userPhone: this.props.login.userPhone,
            userAddress: this.props.login.userAddress,
            note: '',
            pay: ''
        };
    }
    
    onChange = (e) => {
        console.log(this.state);
        var target = e.target;
        var name = target.name; //txtName, txtPhone
        var value = target.value;
        this.setState({
            [name]: value
        });   
        this.props.handleChange(this.state);
    }
    
    render() {
        var { note, pay } = this.state;
        var { fullName, userPhone, userAddress } = this.props.login;
        return (
            <div className="col-md-7 order-md-1"  >
                <h2 className="mb-3">Địa chỉ nhận hàng</h2>
                <div className="needs-validation" >
                     <div className="mb-3">
                        <label htmlFor="name">Họ tên*
                        </label>
                        <input type="text" className="form-control" name="fullName" value={fullName} onChange={this.onChange} required />
                        <div className="invalid-feedback">
                             Please enter your orderee name.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Số điện thoại*
                        </label>
                        <input type="text" className="form-control" name="userPhone" value={userPhone} onChange={this.onChange} required />
                        <div className="invalid-feedback">
                            Please enter your orderee phone.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address">Địa chỉ*</label>
                        <input type="text" className="form-control" name="userAddress" value={userAddress} onChange={this.onChange} required />
                        <div className="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="note">Ghi chú
                        </label>
                        <input type="text" className="form-control" name="note" value={note} onChange={this.onChange} />
                    </div>
                    <hr className="mb-4" />
                    <h2 className="mb-3">Hình thức thanh toán</h2>
                    <div className="d-block my-3">
                        <div className="custom-control custom-radio">
                            <input id="COD" name="pay" type="radio" className="custom-control-input" value='Thanh toán khi nhận hàng' onChange={this.onChange} defaultChecked required />
                            <label className="custom-control-label" htmlFor="COD">Thanh toán khi nhận hàng</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="tranfer" name="pay" type="radio" className="custom-control-input" value='Chuyển khoản' onChange={this.onChange} required />
                            <label className="custom-control-label" htmlFor="tranfer">Chuyển khoản</label>
                        </div>
                    </div>
                    
                </div>
            </div>
                                
        );
    }
   
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, null)(CustomerInfo);
