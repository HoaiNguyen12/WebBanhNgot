import React, { Component } from "react";
import Header from '../Template/Header';
import Footer from '../Template/Footer';
import QT from '../Template/QT';

export default class Contact extends Component {
    render() {
        return (
            <div>
            <Header/>
            <div class="all-page-title page-breadcrumb">
		<div class="container text-center">
			<div class="row">
				<div class="col-lg-12">
					<h1>Contact</h1>
				</div>
			</div>
		</div>
	</div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.644396406337!2d105.78423511424565!3d21.04690999253585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab326aa9bfef%3A0xd60313e072fc5ac4!2zMjM2IEhvw6BuZyBRdeG7kWMgVmnhu4d0LCBD4buVIE5odeG6vywgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1584284164180!5m2!1svi!2s" style={{width:"100%", height:"30em", frameborder:"0" ,border :"0", allowfullscreen:"", tabindex:"0"}}></iframe>
                </div>
                <div class="contact-box">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="heading-title text-center">
                                    <h2>Contact</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <form id="contactForm">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" placeholder="Your Email" id="email" class="form-control" name="name" required data-error="Please enter your email" />
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <select class="custom-select d-block form-control" id="guest" required data-error="Please Select Person">
                                                    <option disabled selected>Please Select Person*</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea class="form-control" id="message" placeholder="Your Message" rows="4" data-error="Write your message" required></textarea>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                            <div class="submit-button text-center">
                                                <button class="btn btn-common" id="submit" type="submit">Send Message</button>
                                                <div id="msgSubmit" class="h3 text-center hidden"></div>
                                                <div class="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                // End Contact

                //Contact info
                <div class="contact-imfo-box">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <i class="fa fa-volume-control-phone"></i>
                                <div class="overflow-hidden">
                                    <h4>Phone</h4>
                                    <p class="lead">
                                        +01 123-456-4590
                                </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <i class="fa fa-envelope"></i>
                                <div class="overflow-hidden">
                                    <h4>Email</h4>
                                    <p class="lead">
                                        yourmail@gmail.com
                                </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <i class="fa fa-map-marker"></i>
                                <div class="overflow-hidden">
                                    <h4>Location</h4>
                                    <p class="lead">
                                        800, Lorem Street, US
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <QT/>
                <Footer/>
            </div>
        )
    }
}