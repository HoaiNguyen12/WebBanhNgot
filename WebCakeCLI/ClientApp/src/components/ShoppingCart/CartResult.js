import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CartResult extends Component {

    render() {

        return (
            <div className="row" style={{marginLeft:'550px', marginBottom:'20px'}}>
                <div className="col">
                    <strong>Tổng Tiền: </strong>
                    
                </div>
                <div className="col">
                    <strong>300$</strong>
                </div>
                <div className="col">
                    <Link to="/checkout"  className="btn btn-outline-primary waves-effect waves-light">Mua Hàng
                        <i className="fa fa-angle-right right"></i>
                    </Link>
                </div>
               
            </div>
        );
    }


}

export default CartResult;
