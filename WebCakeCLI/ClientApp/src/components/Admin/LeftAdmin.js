import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeftAdmin extends Component {
    render(){
        return(
            <div className="list-group" >
                <Link className="list-group-item" exact activeclassname="active-list-group-item" to="/admin/orderList">Quản lý đơn hàng</Link>
                <Link className="list-group-item" activeclassname="active-list-group-item" to="/admin/userList">Quản lý người dùng</Link>
                <Link className="list-group-item" activeclassname="active-list-group-item" to="/admin/productList">Quản lý sản phẩm</Link>
                <Link className="list-group-item" activeclassname="active-list-group-item" to="/admin/categoryList">Quản lý loại sản phẩm</Link>
            </div>
                       
        )
    }
}
export default LeftAdmin;