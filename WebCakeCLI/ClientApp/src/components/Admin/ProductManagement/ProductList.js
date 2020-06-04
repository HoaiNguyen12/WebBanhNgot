import React, { Component } from 'react';
import NavabarAdmin from './../NavbarAdmin';
import LeftAdmin from './../LeftAdmin';
import Product from './Product';
import { connect } from 'react-redux';
import { actFetchProductCategoryRequest } from '../../../actions/product';
import { actFetchCategoryRequest } from '../../../actions/category';
import { NavLink } from 'react-router-dom';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditProductCategory: false,
            category: '',
            product: {
                productDescriptions: '',
                productId: 0,
                productName: '',
                productPrice: 0,
                productUnit: '',
                categoryId: 0,
                productImage:''
            }
        }
    }


    selectProductCategory(categories) {
        var list = null;
        if (categories.length > 0) {
            list = categories.map((category, index) => {
                return (<option key={index} value={category.categoryId}>{category.categoryName}</option>)
            })
        }
        return list;
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
        return (

            <div>
                <NavabarAdmin />
                <div className="themed-container" fluid="sm" style={{ minHeight: '600px' }}>

                    <div className="row" style={{minHeight: '600px'}}>
                        <div className="col-3" style={{backgroundColor:'#d0a772'}}>
                            <LeftAdmin />
                        </div>

                        <div className="col-9" >

                            <div className="container">
                                <h1 className="mt-3 mr-10">Quản lý sản phẩm <NavLink className="btn-info float-right btn-sm" to="/admin/product/create/0" >Thêm sản phẩm</NavLink></h1>
                                <h1/>
                                <div className="modal" id="exampleModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="myModalLabel">Thêm sản phẩm</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="container p-5">
                                                    <h1 style={{ textAlign: 'center' }}>Thêm sản phẩm</h1>
                                                    <form >
                                                        <div className="form-group">
                                                            <label style={{ fontSize: '18px' }}>Tên sản phẩm: </label>
                                                            <input type="text" className="form-control" name="productDescriptions" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label style={{ fontSize: '18px' }}>Hình ảnh: </label>
                                                            <img className="product-img" src={"images/"} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label style={{ fontSize: '18px' }}>Loại sản phẩm: </label>
                                                            <select>
                                                                {this.selectProductCategory(categories)}
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label style={{ fontSize: '18px' }}>Đơn vị tính: </label>
                                                            <input type="text" className="form-control" name="productDescriptions" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label style={{ fontSize: '18px' }}>Mô tả: </label>
                                                            <input type="text" className="form-control" name="productDescriptions" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label style={{ fontSize: '18px' }}>Gía: </label>
                                                            <input type="number" className="form-control" name="productDescriptions" />
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-primary mr-2" data-dismiss="modal">Quay Lại</button>
                                                <button type="button" className="btn btn-primary">Lưu Lại</button>
                                            </div>
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
                                <table className="table table-striped table-bordered" style={{ width: '100%' }} >
                                    <thead>
                                        <tr style={{ height: '1em' }}>
                                            <th className="text-center" style={{ width: '5%' }}>STT</th>
                                            <th className="text-center" style={{ width: '20%' }}>Tên sản phẩm</th>
                                            <th className="text-center" style={{ width: '20%' }}>Hình ảnh</th>
                                            <th className="text-center" style={{ width: '10%' }}>ĐVT</th>
                                            <th className="text-center" style={{ width: '30%' }}>Mô tả</th>
                                            <th className="text-center" style={{ width: '5%' }}>Gía</th>
                                            <th className="text-center" style={{ width: '10%' }}>Thao tác</th>
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