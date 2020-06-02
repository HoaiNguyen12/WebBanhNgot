import React, { Component } from 'react';
import NavabarAdmin from './../NavbarAdmin';
import LeftAdmin from './../LeftAdmin';
import Product from './Product';
import { connect } from 'react-redux';
import { actFetchProductCategoryRequest } from '../../../actions/product';
import { actFetchCategoryRequest } from '../../../actions/category';
import { Link } from 'react-router-dom';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditProductCategory: false,
            category: '',
        }
    }
    showProducts(products) {
        var list = null;
        if (products.length > 0) {
            list = products.map((product, index) => {
                return (<Product
                    key={index}
                    stt={index}
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
    showModal(category) {
        this.setState({
            showEditProductCategory: true,
            category: category
        });
    }
    hideModal() {
        this.setState({
            showEditProductCategory: false
        });
    }
    showCategories(categories) {
        //console.log(categories);
        var list = null;
        if (categories.length > 0) {
            list = categories.map((category, index) => {
                return <button key={category.categoryId} onClick={() => this.getProducts(category.categoryId)} className="nav-item" activeclassname="active-menu">{category.categoryName}</button>
            })
        }
        return list;
    }

    componentWillMount() {
        this.props.fetchProduct(0);
        this.props.fetchCategory();
    }
    render() {
        var { products, categories } = this.props;
        this.props.productsUpdated();
        return(
            <div>
                <NavabarAdmin />
               <div className="themed-container" fluid="sm" style={{minHeight: '600px'}}>
                    <div className="row" style={{minHeight: '600px'}}>
                        <div className="col-3" style={{backgroundColor:'#d0a772'}}>
                            <LeftAdmin />
                        </div>
                        <div className="col-9" >
                            <div className="container">
                                <h1 className="mt-3 mr-10">Quản lý sản phẩm <Link type="button" className="btn-info float-right btn-sm" to="/admin/productForm">Thêm sản phẩm</Link></h1>
                                
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="special-menu text-center">
                                            <div className="button-group filter-button-group">
                                                {this.showCategories(categories)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-bordered" style={{ width: '100%' }} >
                                    <thead>
                                        <tr>
                                            <th style={{ width: '10%' }}>STT</th>
                                            <th style={{ width: '20%' }}>Tên sản phẩm</th>
                                            <th className="product-img" style={{ width: '20%' }}>Hình ảnh</th>
                                            <th style={{ width: '5%' }}>Đơn vị tính</th>
                                            <th style={{ width: '30%' }}>Mô tả</th>
                                            <th style={{ width: '5%' }}>Gía</th>
                                            <th style={{ width: '10%' }}>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {this.showProducts(products)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

var mapStateToProps = state => {
    return {
        products: state.products,
        categories: state.categories,
        productsUpdated: () => { return true }
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

export default connect(mapStateToProps, mapDispathToProps)(ProductList);