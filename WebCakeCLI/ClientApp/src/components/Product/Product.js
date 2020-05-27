import React, { Component } from "react";
import { connect } from 'react-redux';
import { actAddToCart } from '../../actions/cart';

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0
		}
	}
	addToCart(product, index) {
		console.log(index);
		this.props.addToCart(product);
        let imgtodrag = document.getElementsByClassName('product')[index];
        let viewcart = document.getElementsByClassName('w3view-cart')[0];
		let imgtodragImage = imgtodrag.querySelector('.pro-image-front');

		let disLeft = imgtodrag.getBoundingClientRect().left + 200;
		let disTop = imgtodrag.getBoundingClientRect().top + 200;
		let disWitdh = imgtodrag.getBoundingClientRect().width;
        let cartleft = viewcart.getBoundingClientRect().left;
        let carttop = viewcart.getBoundingClientRect().top;
        let image = imgtodragImage.cloneNode(true);

        image.style = 'z-index: 1111; width: 100px;opacity:0.8; position:fixed; top:' + disTop + 'px;left:' + disLeft + 'px;transition: left 2s, top 2s, width 2s, opacity 2s cubic-bezier(1, 1, 1, 1)';
        var rechange = document.body.appendChild(image);
        setTimeout(function () {
            image.style.left = cartleft + 'px';
            image.style.top = carttop + 'px';
			image.style.width = disWitdh;
            image.style.opacity = '0';
        }, 200);
        setTimeout(function () {
            rechange.parentNode.removeChild(rechange);
        }, 2000);
	}

    

	render() {
		return (
			<div className="col-lg-4 col-md-6">
				<div id="product" className="product" key={this.props.keyId}>
					<div className="box button-group filter-button-group">
						<img src={"images/" + this.props.product.productImage} alt={this.props.product.pro} className="pro-image-front" key={this.props.keyId} />
						<i className="add-to-cart" className="fa fa-plus" onClick={() => this.addToCart(this.props.product, this.props.keyId)} />
						<h2>{this.props.product.productName}</h2>
						<p>$ { this.props.product.productPrice }</p>
				</div>
			</div>
			</div >
		)
	}

	
}
var mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

var mapDispathToProps = (dispatch, props) => {
	return {
		addToCart: (product) => {
			dispatch(actAddToCart(product,1));
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Product);