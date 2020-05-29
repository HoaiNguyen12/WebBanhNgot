import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeftAdmin extends Component {
    render(){
        return(
            <div className="list-group" >
                <Link className="list-group-item" to="/admin/userList">Quản lý người dùng</Link>
                <Link className="list-group-item" to="/admin/productList">Quản lý sản phẩm</Link>
                <Link className="list-group-item" to="/admin/categoryList">Quản lý loại sản phẩm</Link>
                <Link className="list-group-item" to="/admin/billList">Quản lý đơn hàng</Link>
            </div>
                       
        )
    }
}
export default LeftAdmin;