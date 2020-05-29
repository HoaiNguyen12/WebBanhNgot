import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class categoryForm extends Component {
    render(){
        return(
            <div className="container p-5">
                <h1 style={{textAlign: 'center'}}>Thêm loại sản phẩm</h1>
                <form >
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Tên loại sản phẩm: </label>
                        <input type="text" className="form-control" />
                    </div>
                    <Link className="btn btn-primary mr-2" to="/admin/categoryList">Quay Lại</Link>
                    <button type="button" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
        )
    }
}

export default categoryForm;