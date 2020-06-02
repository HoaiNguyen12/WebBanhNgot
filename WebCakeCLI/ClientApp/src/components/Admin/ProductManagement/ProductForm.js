import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchCategoryRequest } from '../../../actions/category';
import { actFetchProductRequest } from '../../../actions/product';
import { useParams } from 'react-router-dom';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
        }
    }
    componentWillMount() {
        this.props.fetchCategory();
        //var id = useParams();
        //console.log(id);
        console.log(this.props.match.match.params.id);
        this.props.fetchProduct(this.props.match.match.params.id);
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

    render() {
        var { categories,product } = this.props;
        return(
            <div className="container p-5">
                <h1 style={{textAlign: 'center'}}>Thêm sản phẩm</h1>
                <form >
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Tên sản phẩm: </label>
                        <input type="text" className="form-control" value={this.props.product.productDescriptions} name="productDescriptions"/>
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Hình ảnh: </label>
                        <img className="product-img" src={"images/" + this.props.product.productImage} />
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Loại sản phẩm: </label>
                        <select>
                            {this.selectProductCategory(categories)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Đơn vị tính: </label>
                        <input type="text" className="form-control" value={this.props.product.productUnit} name="productDescriptions" />
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Mô tả: </label>
                        <input type="text" className="form-control" value={this.props.product.productDescriptions} name="productDescriptions" />
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Gía: </label>
                        <input type="number" className="form-control" value={this.props.product.productPrice} name="productDescriptions" />
                    </div>
                    <Link className="btn btn-primary mr-2" to="/admin/productList">Quay Lại</Link>
                    <button type="button" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
        )
    }
}

var mapStateToProps = state => {
    return {
        categories: state.categories,
        product: state.products
    }
}

var mapDispathToProps = (dispatch, props) => {
    return {
        fetchCategory: () => {
            dispatch(actFetchCategoryRequest());
        },
        fetchProduct: (id) => {
            dispatch(actFetchProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ProductForm);