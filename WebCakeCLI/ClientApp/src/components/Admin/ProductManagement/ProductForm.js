import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchCategoryRequest } from '../../../actions/category';
import { actFetchProductRequest, actAddProductRequest, actEditProductRequest } from '../../../actions/product';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                productDescriptions: '',
                productId: 0,
                productName: '',
                productPrice: 0,
                productUnit: '',
                categoryId: 0,
            productImage: '',
            productSize: 'nhỏ'
            
        }
    }
    componentDidMount() {
        this.props.fetchCategory();

        
        //var id = useParams();
        //console.log(id);
        if (this.props.match) {
            console.log(this.props.match.match.params.id);
            this.props.fetchProduct(this.props.match.match.params.id);
            this.setState({ file: "images/" + this.props.product.productImage });
            //this.setState({ product : this.props.product })
        }
    }
    //componentDidMount() {
    //    //this.state = this.props.product;
    //    this.setState({ product: this.props.product })
    //}

    selectProductCategory(categories) {

        var list = null;
        if (categories.length > 0) {
            list = categories.map((category, index) => {
                return (<option key={category.c} value={category.categoryId}>{category.categoryName}</option>)
            })
        }
        return list;
    }

    SaveProduct() {
        if (this.state.productId == 0) {
            console.log(this.state);
            this.props.addProduct(this.state);
        }
        else {

        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name; //txtName, txtPhone
        var value = target.value;
        console.log(this.state);
        this.setState({
            [name]: value
        
        });
        //this.props.onHandleChange(this.state);
    }

    handleChange = (event) => {

        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        });
    }

    render() {
        var { categories, product } = this.props;
        return(
            <div className="container p-5">
                <h1 style={{textAlign: 'center'}}>Thêm sản phẩm</h1>
                <form >
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Tên sản phẩm: </label>
                        <input type="text" className="form-control" onChange={this.onChange} value={this.state.productName} name="productName"/>
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Hình ảnh: </label>
                        <input type="file" onChange={this.handleChange} />
                        <img className="product-img" id="fileItem" src={this.state.file} />
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Loại sản phẩm: </label>
                        <select value={this.state.categoryId} name="categoryId" onChange={this.onChange} id="abc">
                            {this.selectProductCategory(categories)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Đơn vị tính: </label>
                        <input type="text" className="form-control" onChange={this.onChange} value={this.state.productUnit} name="productUnit" />
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Mô tả: </label>
                        <input type="text" className="form-control" onChange={this.onChange} value={this.state.productDescriptions} name="productDescriptions" />
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Gía: </label>
                        <input type="number" className="form-control" onChange={this.onChange} value={this.state.productPrice} name="productPrice" />
                    </div>
                    <Link className="btn btn-primary mr-2" to="/admin/productList">Quay Lại</Link>
                    <button type="button" className="btn btn-primary" onClick={() => this.SaveProduct()}>Lưu Lại</button>
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
        },
        addProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        editProduct: (product) => {
            dispatch(actEditProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ProductForm);