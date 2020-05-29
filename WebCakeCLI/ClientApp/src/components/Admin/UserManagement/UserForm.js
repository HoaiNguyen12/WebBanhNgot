import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserForm extends Component {
    render(){
        return(
            <div className="container p-5">
                <h1 style={{textAlign: 'center'}}>Thêm người dùng</h1>
                <form >
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>User Name: </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Full Name: </label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Phone: </label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" style={{fontSize:'18px'}}/> Là quản trị viên
                        </label>
                    </div>
                    <Link className="btn btn-primary mr-2" to="/admin/userList">Quay Lại</Link>
                    <button type="button" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
        )
    }
}

export default UserForm;