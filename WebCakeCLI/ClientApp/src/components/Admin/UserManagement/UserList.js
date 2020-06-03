import React, { Component } from 'react';
import NavabarAdmin from './../NavbarAdmin';
import LeftAdmin from './../LeftAdmin';
import User from './User';
import { actFetchUsersRequest } from './../../../actions/user';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class UserList extends Component {
    showUser(users) {
        var list = null;
        if (users.length > 0) {
            list = users.map((user, index) => {
                return (<User
                    key={index}
                    stt={index}
                    user={user}
                />)
            })
        }
        return list;
    }
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        var { users } = this.props;
        return(
            <div>
                <NavabarAdmin />
               <div className="themed-container" fluid="sm" style={{height: '600px'}}>
                    <div className="row" style={{height: '600px'}}>
                        <div className="col-3" style={{backgroundColor:'#d0a772'}}>
                            <LeftAdmin />
                        </div>
                        <div className="col-9" >
                            <div className="container">
                                <h1 className="mt-3">Quản lý người dùng</h1>
                                <Link type="button" className="btn btn-info btn-sm mb-3" to="/admin/userForm">Thêm người dùng</Link>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên người dùng</th>
                                            <th>Tên đăng nhập</th>
                                            <th>Số điện thoại</th>
                                            <th>Địa Chỉ</th>
                                            <th>Vai trò</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {this.showUser(users)}
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
        users: state.users
    }
}

var mapDispathToProps = (dispatch, props) => {
    return {
        fetchUser: () => {
            dispatch(actFetchUsersRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(UserList);