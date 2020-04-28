import React, { Component } from 'react';
import Header from './../Template/Header';
import Footer from './../Template/Footer';
import CartItem from './CartItem';
import CartResult from './CartResult';
import Contact from './../Home/Contact';


class Cart extends Component {

    render() {

        return (
            <div>
                <Header />
                <div className="all-page-title page-breadcrumb">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Shopping Cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" style={{marginTop:'20px', color:'black',fontSize:'18px'}}>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>product Name</th>
                                <th>email</th>
                                <th>Tổng cộng</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem />
                            
                        </tbody>
                    </table>
                    <CartResult />
                </div>
                <Contact />
                <Footer />
            </div>
            
        );
    };
}

export default Cart;
