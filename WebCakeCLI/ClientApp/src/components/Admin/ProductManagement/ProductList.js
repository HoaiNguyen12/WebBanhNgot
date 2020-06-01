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
        return(
            <div>
                <NavabarAdmin />
               <div className="themed-container" fluid="sm" style={{height: '600px'}}>
                    <div className="row" style={{height: '600px'}}>
                        <div className="col-3" style={{backgroundColor:'#d0a772'}}>
                            <LeftAdmin />
                        </div>
                        <div className="col-9" >
                            <div className="container">
                                <h1 className="mt-3">Quản lý sản phẩm</h1>
                                {this.showCategories(categories)}
                                <Link type="button" className="btn btn-info btn-sm mb-3" to="/admin/productForm">Thêm sản phẩm</Link>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="col-sm-1">STT</th>
                                            <th className="col-sm-2">Tên sản phẩm</th>
                                            <th className="col-sm-2">Hình ảnh</th>
                                            <th className="col-sm-1">Đơn vị tính</th>
                                            <th className="col-sm-2">Mô tả</th>
                                            <th className="col-sm-2">Gía</th>
                                            <th className="col-sm-2">Thao tác</th>
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

export default connect(mapStateToProps, mapDispathToProps)(ProductList);