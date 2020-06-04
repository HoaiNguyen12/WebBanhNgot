import React, { Component } from "react";
import Header from '../Template/Header';
import Footer from '../Template/Footer';
import QT from '../Template/QT';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v7.0"></script>
            <Header/>
            <div className="all-page-title page-breadcrumb">
		<div className="container text-center">
			<div className="row">
				<div className="col-lg-12">
					<h1>Contact</h1>
				</div>
			</div>
		</div>
	</div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.644396406337!2d105.78423511424565!3d21.04690999253585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab326aa9bfef%3A0xd60313e072fc5ac4!2zMjM2IEhvw6BuZyBRdeG7kWMgVmnhu4d0LCBD4buVIE5odeG6vywgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1584284164180!5m2!1svi!2s" style={{width:"100%", height:"30em", frameborder:"0" ,border :"0", allowfullscreen:"", tabindex:"0"}}></iframe>
                </div>
                <div className="contact-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-title text-center">
                                    <h2>Contact</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                
                                <strong>Support:</strong>   <a href="mailto:Hoainguyen.1128@gmail.com">Support@example.com</a><br />
                                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFast-food-261690751401405&tabs=timeline&width=340&height=238&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="238" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-imfo-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <i className="fa fa-volume-control-phone"></i>
                                <div className="overflow-hidden">
                                    <h4>Phone</h4>
                                    <p className="lead">
                                        +01 123-456-4590
                                </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <i className="fa fa-envelope"></i>
                                <div className="overflow-hidden">
                                    <h4>Email</h4>
                                    <p className="lead">
                                        yourmail@gmail.com
                                </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <i className="fa fa-map-marker"></i>
                                <div className="overflow-hidden">
                                    <h4>Location</h4>
                                    <p className="lead">
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