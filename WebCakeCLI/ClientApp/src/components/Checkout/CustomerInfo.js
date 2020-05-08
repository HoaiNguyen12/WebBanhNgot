import React, { Component } from 'react';


class CustomerInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            phone: '',
            address: '',
            note:'',
            pay:''
        };
    }
    
    onChange = (e) => {
        var target = e.target;
        var name = target.name; //txtName, txtPhone
        var value = target.value; //giá trị tại txtName, txtPhone
        this.setState({
            [name]: value
        });
        this.props.onHandleChange(this.state);   
    }

    render() {
        var { name, phone, address, note, pay} = this.state;
        return (
            <div className="col-md-7 order-md-1"  >
                <h2 className="mb-3">Địa chỉ nhận hàng</h2>
                <div className="needs-validation" >
                     <div className="mb-3">
                        <label htmlFor="name">Họ tên*
                        </label>
                        <input type="text" className="form-control" name="name" value={name} onChange={ this.onChange } required />
                        <div className="invalid-feedback">
                             Please enter your orderee name.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Số điện thoại*
                        </label>
                        <input type="text" className="form-control" name="phone" value={phone} onChange={this.onChange} required />
                        <div className="invalid-feedback">
                            Please enter your orderee phone.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address">Địa chỉ*</label>
                        <input type="text" className="form-control" name="address" value={address} onChange={this.onChange} required />
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
                            <input id="COD" name="pay" type="radio" className="custom-control-input" value={pay} onChange={this.onChange} defaultChecked required />
                            <label className="custom-control-label" htmlFor="COD">Thanh toán khi nhận hàng</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="tranfer" name="pay" type="radio" className="custom-control-input" value={pay} onChange={this.onChange} required />
                            <label className="custom-control-label" htmlFor="tranfer">Chuyển khoản</label>
                        </div>
                    </div>
                    
                </div>
            </div>
                                
        );
    }
   
}

export default CustomerInfo;
