import React, { Component } from 'react';
import Header from './../Template/Header';
import Footer from './../Template/Footer';
import Contact from './../Home/Contact';


class Cart extends Component {

    render() {
        var { children} = this.props;
        return (
            <div>
                <Header />
                <div className="all-page-title page-breadcrumb">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Giỏ hàng của bạn</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{marginTop:'20px', color:'black',fontSize:'18px'}}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản phẩm</th>
                                <th>Gía</th>
                                <th>Số lượng</th>
                                <th>Tổng cộng</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            { children}
                        </tbody>
                    </table>
                </div>
                <Contact />
                <Footer />
            </div>
            
        );
    };
}

export default Cart;
