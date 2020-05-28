import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		this.props.cartUpdated();
		let total = this.props.total.total;
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
						<div className="collapse navbar-collapse" id="navbars-rs-food">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item" ><NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink></li>
								<li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/menu">Menu</NavLink></li>
								<li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink></li>
								<li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink></li>
								<li className="nav-item">
									<button className="w3view-cart" activeclassname="active" to="/cart">
										<i className="fa fa-shopping-cart fa-1x" >{total}</i> Shopping Cart
									</button>
								</li>
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
		total: state.cart,
		cartUpdated: () => { return true }
	}
}

var mapDispathToProps = (dispatch, props) => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);