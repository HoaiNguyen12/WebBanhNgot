import React, { Component } from 'react';

class CustomerInfo extends Component {

    render() {

        return (
            <div className="col-md-7 order-md-1">
                <h2 className="mb-3">Billing address</h2>
                <form className="needs-validation" novalidate>
                     <div className="mb-3">
                        <label for="name">Name*
                        </label>
                        <input type="text" className="form-control" id="name" required />
                        <div className="invalid-feedback">
                             Please enter your orderee name.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="phone">Phone*
                        </label>
                        <input type="text" className="form-control" id="phone" required />
                        <div className="invalid-feedback">
                            Please enter your orderee phone.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="address">Address*</label>
                        <input type="text" className="form-control" id="address" required />
                        <div className="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="note">Note
                        </label>
                        <input type="text" className="form-control" id="note" />
                    </div>
                    <hr className="mb-4" />
                    <h2 className="mb-3">Payments</h2>
                    <div className="d-block my-3">
                        <div className="custom-control custom-radio">
                            <input id="COD" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                            <label className="custom-control-label" for="COD">COD</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="tranfer" name="paymentMethod" type="radio" className="custom-control-input" required />
                            <label className="custom-control-label" for="tranfer">Tranfer</label>
                        </div>
                    </div>
                </form>
            </div>
                                
        );
    }
}

export default CustomerInfo;
