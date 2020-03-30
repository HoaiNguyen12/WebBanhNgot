import React, { Component } from 'react';
import Product from './Product';
import Header from '../Template/Header';
import Footer from '../Template/Footer';
import QT from '../Template/QT';
import { connect } from 'react-redux';
import { actFetchProductRequest } from '../../actions/product';
import { actFetchCategoryRequest } from '../../actions/category';

class MenuProduct extends Component {
	constructor(props) {
		super(props);

	}
	showProducts(products) {
		var list = null;
		if (products.lenght > 0) {
			list = products.map((product, index) => {
				return (<Product
					key={product.productId}
					product={product}
				/>)
			})
		}
		return list;
	}

	showCategories(categories) {
		//console.log(categories);
		var list = null;
		if (categories.length > 0) {
			list = categories.map((category, index) => {
				return <button key={index}>{category.categoryName}</button>
			})
		}
		return list;
	}

	componentDidMount() {
		this.props.fetchAllProduct();
		this.props.fetchCategory();
	}

	render() {
		var { products, categories } = this.props;


		return (
			<div>
				<Header />
				<div className="all-page-title page-breadcrumb">
					<div className="container text-center">
						<div className="row">
							<div className="col-lg-12">
								<h1>Special Menu</h1>
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
										{this.showCategories(categories)}
									</div>
								</div>
							</div>
						</div>

						<div className="row special-list">

							{this.showProducts(products)}
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
									<img src="images/img-08.jpg" className="img-fluid" alt="Image" />
									<div className="why-text">
										<h4>Special Dinner 2</h4>
										<p>Sed id magna vitae eros sagittis euismod.</p>
										<h5> $22.79</h5>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 special-grid dinner">
								<div className="gallery-single fix">
									<img src="images/img-09.jpg" className="img-fluid" alt="Image" />
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
				<QT />
				<Footer />
			</div>
		)
	}
}

var mapStateToProps = state => {
	return {
		products: state.products,
		categories: state.categories
	}
}

var mapDispathToProps = (dispatch, props) => {
	return {
		fetchAllProduct: () => {
			dispatch(actFetchProductRequest());
		},
		fetchCategory: () => {
			dispatch(actFetchCategoryRequest());
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(MenuProduct);