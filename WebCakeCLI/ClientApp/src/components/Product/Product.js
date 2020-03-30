import React, { Component } from "react";

class Product extends Component {
    render() {
        return(
            <div className="col-lg-4 col-md-6 special-grid drinks">
					<div className="gallery-single fix">
						<img src={this.props.Image} className="img-fluid" alt="Image"/>
						<div className="why-text">
							<h4>{this.props.Name}</h4>
							<p>{this.props.Description}</p>
							<h5> {this.props.Price} VNĐ</h5>
						</div>
					</div>
				</div>
        )
    }
}

export default Product;