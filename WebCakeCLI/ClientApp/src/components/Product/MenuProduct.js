import React, { Component } from 'react';
import Product from './Product';
import Header from '../Template/Header';
import Footer from '../Template/Footer';
import QT from '../Template/QT';
import { connect } from 'react-redux';
import { actFetchProductCategoryRequest } from '../../actions/product';
import { actFetchCategoryRequest } from '../../actions/category';

class MenuProduct extends Component {
	constructor(props) {
		super(props);

	}
	showProducts(products) {
		var list = null;
		if (products.length > 0) {
			list = products.map((product, index) => {
				return (<Product
					key={product.productId}
					product={product}
				/>)
			})
		}
		return list;
	}

	getProducts(categoryId) {
		console.log(categoryId);
		this.props.fetchProduct(categoryId);
	}

	showCategories(categories) {
		//console.log(categories);
		var list = null;
		if (categories.length > 0) {
			list = categories.map((category, index) => {
				return <button key={category.categoryId} onClick={() => this.getProducts(category.categoryId)} className="nav-item" activeClassName="active-menu">{category.categoryName}</button>
			})
		}
		return list;
	}

	componentDidMount() {
		this.props.fetchProduct(0);
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
										{this.showCategories(categories)}
									</div>
								</div>
							</div>
						</div>

						<div className="row special-list">

							{this.showProducts(products)}
							

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
		fetchProduct: (id) => {
			dispatch(actFetchProductCategoryRequest(id));
		},
		fetchCategory: () => {
			dispatch(actFetchCategoryRequest());
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(MenuProduct);