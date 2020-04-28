import React, { Component } from 'react';
import Header from './../Template/Header';
import Footer from './../Template/Footer';
import CustomerInfo from './CustomerInfo';
import YourOrder from './YourOrder';
import Contact from '../Home/Contact';

class Checkout extends Component {

    render() {

        return (
            <div >
                <Header />
                <div className="all-page-title page-breadcrumb">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div id="content">
                        <form action="#" method="post" className="beta-form-checkout">
                            <div className="row" style={{marginTop:'20px',color:'black',fontSize:'18px'}}>
                                <CustomerInfo />
                                <YourOrder />
                              </div>
			            </form>
                    </div> 
	            </div>
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Checkout;
