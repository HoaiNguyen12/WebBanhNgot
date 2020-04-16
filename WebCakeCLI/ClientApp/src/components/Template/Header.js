import React, { Component }  from 'react';
import {NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
	
    render() {
        return(
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

						{/* <li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Pages</a>
							<div className="dropdown-menu" aria-labelledby="dropdown-a">
								<a className="dropdown-item" href="reservation.html">Reservation</a>
								<a className="dropdown-item" href="stuff.html">Stuff</a>
								<a className="dropdown-item" href="gallery.html">Gallery</a>
							</div>
						</li> 
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Blog</a>
							<div className="dropdown-menu" aria-labelledby="dropdown-a">
								<a className="dropdown-item" href="blog.html">blog</a>
								<a className="dropdown-item" href="blog-details.html">blog Single</a>
							</div>
						</li>*/}
								<li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink></li>
							</ul>
							<p className="fa fa-cart"></p>
				</div>
			</div>
		</nav>
	</header>
        )
    }
        
}

var mapStateToProps = state => {
	return {
	}
}

var mapDispathToProps = (dispatch, props) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);