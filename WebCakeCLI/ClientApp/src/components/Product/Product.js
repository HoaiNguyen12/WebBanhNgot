import React, { Component } from "react";

class Product extends Component {
	render() {
		return (
			<div className="col-lg-4 col-md-6">
				<div className="gallery-single fix">
					<img src={"images/" + this.props.product.productImage} className="img-fluid" style={{ height : 20 +'em', width: 25 + 'em'}} />
					<div>
						<h4>{this.props.product.productName}</h4>
							<p>{this.props.product.productDescription}</p>
							<p className="Price"> {this.props.product.productPrice} VNĐ</p>
						</div>
				</div>
			</div>
		)
	}
}

export default Product;