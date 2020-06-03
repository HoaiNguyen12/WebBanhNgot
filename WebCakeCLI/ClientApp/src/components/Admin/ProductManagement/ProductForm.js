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
            categoryId: 1,
            productImage: '',
            productSize: 'nhỏ'
        };
    }
    componentDidMount() {
        this.props.fetchCategory();
        const { type, id } = this.props?.match?.params;
        console.log(this.props,'props')
        if (type === 'edit') {
                this.props.fetchProduct(id);
                this.setState({ file: "images/" + this.props.product.productImage }); // API lấy sản phẩm qua id
                //this.setState({ product : this.props.product })
        }
        //var id = useParams();
        //console.log(id);
        
    }

    selectProductCategory(categories) {

        var list = null;
        if (categories.length > 0) {
            list = categories.map((category, index) => {
                return (<option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>)
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
            this.props.editProduct(this.state);
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name; //txtName, txtPhone
        var value = target.value;
        if ((name == "productPrice") || (name == "categoryId") ){
            value = parseInt(value);
        }
        this.setState({
            [name]: value
        });
    }

    handleChange = (event) => {

        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        });
    }

    render() {
        const { categories, product } = this.props;
        const path = product?.productImage ? `images/${product?.productImage}` : "Chỗ này thêm 1 ảnh trống nào đó đề phòng không có file ảnh " ;
        const title = this.props.match.params.type == "edit" ? "Sửa sản phẩm" : "Thêm sản phẩm" ;
        return(
            <div className="container p-5">
                <h1 style={{ textAlign: 'center' }}>{title}</h1>
                <form >
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Tên sản phẩm: </label>
                        <input type="text" className="form-control" onChange={this.onChange} value={product?.productName} name="productName"/>
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Hình ảnh: </label>
                        <input type="file" onChange={this.handleChange} />
                        <img className="product-img" id="fileItem" src={path} />
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Loại sản phẩm: </label>
                        <select value={product?.categoryId} name="categoryId" onChange={this.onChange} id="abc">
                            {this.selectProductCategory(categories)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Đơn vị tính: </label>
                        <input type="text" className="form-control" onChange={this.onChange} value={product?.productUnit} name="productUnit" />
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Mô tả: </label>
                        <input type="text" className="form-control" onChange={this.onChange} value={product?.productDescriptions} name="productDescriptions" />
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Gía: </label>
                        <input type="number" className="form-control" onChange={this.onChange} value={product?.productPrice} name="productPrice" />
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