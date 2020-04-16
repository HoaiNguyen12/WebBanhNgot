import React, { Component } from "react";
import Header from '../Template/Header';
import Footer from '../Template/Footer';
import QT from '../Template/QT';

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="all-page-title page-breadcrumb">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <img src="images/about-img.jpg" alt="" className="img-fluid" />>
				</div>
                            <div className="col-lg-6 col-md-6 text-center">
                                <div className="inner-column">
                                    <h1>Welcome To <span>Yamifood Restaurant</span></h1>
                                    <h4>Little Story</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem. </p>
                                    <p>Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
                                    <a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="inner-pt">
                                    <p>Sed tincidunt, neque at egestas imperdiet, nulla sapien blandit nunc, sit amet pulvinar orci nibh ut massa. Proin nec lectus sed nunc placerat semper. Duis hendrerit elit nec sapien porttitor, ut pretium ipsum feugiat. Aenean volutpat porta nisi in gravida. Curabitur pulvinar ligula sed facilisis bibendum. Nullam vitae nulla elit. </p>
                                    <p>Integer purus velit, eleifend eu magna volutpat, porttitor blandit lectus. Aenean risus odio, efficitur quis erat eget, mattis tristique arcu. Fusce in ante enim. Integer consectetur elit nec laoreet rutrum. Mauris porta turpis nec tellus accumsan pellentesque. Morbi non quam tempus, convallis urna in, cursus mauris. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="menu-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-title text-center">
                                    <h2>Special Menu</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="special-menu text-center">
                                    <div className="button-group filter-button-group">
                                        <button className="active" data-filter="*">All</button>
                                        <button data-filter=".drinks">Drinks</button>
                                        <button data-filter=".lunch">Lunch</button>
                                        <button data-filter=".dinner">Dinner</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row special-list">
                            <div className="col-lg-4 col-md-6 special-grid drinks">
                                <div className="gallery-single fix">
                                    <img src="images/img-01.jpg" className="img-fluid" alt="Image" />
                                    <div className="why-text">
                                        <h4>Special Drinks 1</h4>
                                        <p>Sed id magna vitae eros sagittis euismod.</p>
                                        <h5> $7.79</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 special-grid drinks">
                                <div className="gallery-single fix">
                                    <img src="images/img-02.jpg" className="img-fluid" alt="Image" />
                                    <div className="why-text">
                                        <h4>Special Drinks 2</h4>
                                        <p>Sed id magna vitae eros sagittis euismod.</p>
                                        <h5> $9.79</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 special-grid drinks">
                                <div className="gallery-single fix">
                                    <img src="images/img-03.jpg" className="img-fluid" alt="Image" />
                                    <div className="why-text">
                                        <h4>Special Drinks 3</h4>
                                        <p>Sed id magna vitae eros sagittis euismod.</p>
                                        <h5> $10.79</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 special-grid lunch">
                                <div className="gallery-single fix">
                                    <img src="images/img-04.jpg" className="img-fluid" alt="Image" />
                                    <div className="why-text">
                                        <h4>Special Lunch 1</h4>
                                        <p>Sed id magna vitae eros sagittis euismod.</p>
                                        <h5> $15.79</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 special-grid lunch">
                                <div className="gallery-single fix">
                                    <img src="images/img-05.jpg" className="img-fluid" alt="Image" />
                                    <div className="why-text">
                                        <h4>Special Lunch 2</h4>
                                        <p>Sed id magna vitae eros sagittis euismod.</p>
                                        <h5> $18.79</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 special-grid lunch">
                                <div className="gallery-single fix">
                                    <img src="images/img-06.jpg" className="img-fluid" alt="Image" />
                                    <div className="why-text">
                                        <h4>Special Lunch 3</h4>
                                        <p>Sed id magna vitae eros sagittis euismod.</p>
                                        <h5> $20.79</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 special-grid dinner">
                                <div className="gallery-single fix">
                                    <img src="images/img-07.jpg" className="img-fluid" alt="Image" />
                                    <div className="why-text">
                                        <h4>Special Dinner 1</h4>
                                        <p>Sed id magna vitae eros sagittis euismod.</p>
                                        <h5> $25.79</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 special-grid dinner">
                                <div className="gallery-single fix">
                                    <img src="images/img-08.jpg" className="img-fluid" alt="Image" />>
						<div className="why-text">
                                        <h4>Special Dinner 2</h4>
                                        <p>Sed id magna vitae eros sagittis euismod.</p>
                                        <h5> $22.79</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 special-grid dinner">
                                <div className="gallery-single fix">
                                    <img src="images/img-09.jpg" className="img-fluid" alt="Image" />>
						<div className="why-text">
                                        <h4>Special Dinner 3</h4>
                                        <p>Sed id magna vitae eros sagittis euismod.</p>
                                        <h5> $24.79</h5>
                                    </div>
                                </div>
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
                <QT />
                <Footer />
            </div>
        )
    }
}