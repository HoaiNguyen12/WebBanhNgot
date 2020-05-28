import React, { Component } from 'react';
import HeaderAdmin from '../Template/HeaderAdmin';
import NavBar from '../Template/NavBar';
import ProductAdmin from './ProductAdmin';
import { connect } from 'react-redux';
import { actFetchProductCategoryRequest } from '../../actions/product';
import { actFetchCategoryRequest } from '../../actions/category';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditProductCategory: false,
            category : '',
        }
    }
    showProducts(products) {
        var list = null;
        if (products.length > 0) {
            list = products.map((product, index) => {
                return (<ProductAdmin
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

    componentDidMount() {
        this.props.fetchProduct(0);
        this.props.fetchCategory();
    }
    render() {
        var { products, categories } = this.props;
        return (
            <div className="default-layout col-lg-12 col-12 p-0 d-flex flex-row">

                <HeaderAdmin />
                <div className="col-lg-12 col-12">
                    <div className="container-fluid page-body-wrapper">
                            <NavBar />
                        <div className="container col-10">
                            <div>
                                    <div className="special-menu text-center">
                                        <div className="button-group filter-button-group">
                                        {this.showCategories(categories)}
                                        <button className="nav-item fa fa-plus-circle"></button>
                                        </div>
                                </div>
                            </div>
                            <div>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="col-1">STT</th>
                                            <th scope="col" className="col-2">Tên món</th>
                                            <th scope="col" className="col-1">Giá món</th>
                                            <th scope="col" className="col-2">Ảnh</th>
                                            <th scope="col" className="col-1">Đơn vị</th>
                                            <th scope="col" className="col-4">Mô tả</th>
                                            <th scope="col" className="col-1">Thao tác</th>
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