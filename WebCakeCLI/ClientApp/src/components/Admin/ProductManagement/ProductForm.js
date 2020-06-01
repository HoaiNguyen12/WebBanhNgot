import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductForm extends Component {
    
    render(){
        return(
            <div className="container p-5">
                <h1 style={{textAlign: 'center'}}>Thêm sản phẩm</h1>
                <form >
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Tên sản phẩm: </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Hình ảnh: </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Loại sản phẩm: </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Đơn vị tính: </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Mô tả: </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Gía: </label>
                        <input type="number" className="form-control" />
                    </div>
                    <Link className="btn btn-primary mr-2" to="/admin/productList">Quay Lại</Link>
                    <button type="button" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
        )
    }
}

export default ProductForm;