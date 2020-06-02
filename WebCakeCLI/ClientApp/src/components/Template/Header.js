import React, { Component } from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	showTotalQuantity = (cart) => {
        var quantity = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                quantity += cart[i].quantity ;
            }
        }
        return quantity;
	}
	

	render() {
		this.props.cartUpdated();
		var { cart } = this.props;
		
		return (
			<header className="top-navbar">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container">
						<a className="navbar-brand" href="index.html">
							<img src="images/logo.png" alt="" />
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbars-rs-food" >
							<ul className="navbar-nav ml-auto" > 
								<li className="nav-item" ><NavLink className="nav-link" exact activeClassName="active" to="/" >Home</NavLink></li>
								<li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/menu" >Menu</NavLink></li>
								<li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/about" >About</NavLink></li>
								<li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/contact" >Contact</NavLink></li>
								<li className="nav-item">
									<NavLink className="nav-link" activeClassName="active" to="/contact" >
										<button type="button" className="w3view-cart" >
											<i className="fa fa-shopping-cart fa-1x" >{this.showTotalQuantity(cart)}</i> Shopping Cart
										</button>
									</NavLink>
								</li>
								<li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/login" >Đăng nhập</NavLink></li>
								<li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/registration" >Đăng ký</NavLink></li>
								
							</ul>
						</div>
					</div>
				</nav>
			</header>
        )
    }

}

var mapStateToProps = state => {
	return {
		cart: state.cart,
		cartUpdated: () => { return true },
		login: state.login
	}
}

var mapDispathToProps = (dispatch, props) => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);