import React, { Component } from "react";

class Product extends Component {
	render() {
		return (
			<div className="col-lg-4 col-md-6">
				<div id="product">
					<div className="box button-group filter-button-group">
						<img src={"images/" + this.props.product.productImage} className="thumbnail" />
						<i className="fa fa-plus"  />
						<h2>{this.props.product.productName}</h2>
						<p>$ { this.props.product.productPrice }</p>
				</div>
			</div>

		
			</div >
		)
	}

	
}

export default Product;