import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { actFetchDeleteUserRequest } from '../../../actions/user';

class User extends Component {
    DeleteUser(id) {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa?',
            text: "Sau khi xóa sẽ không thể khôi phục",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            buttonsStyling: false
        }).then((result) => {
            if (result.value) {
                this.props.deleteUser(id);
                Swal.fire({
                    title: "Đã xóa",
                    text: "Người dùng đã được xóa",
                    icon: "success",
                    timer: 1000,
                    showCancelButton: false,
                    showConfirmButton: false
                });
            }
            else {
                Swal.fire({
                    title: 'Đã hủy',
                    text: "Người dùng không được xóa",
                    icon: "error",
                    timer: 1000,
                    showCancelButton: false,
                    showConfirmButton: false
                });
            }
        })
    }
    render() {
        return (
            <tr>
                <th>{this.props.stt + 1}</th>
                <td >{this.props.user.fullName}</td>
                <td >{this.props.user.userName}</td>
                <td >{this.props.user.userPhone}</td>
                <td >{this.props.user.userAddress}</td>
                <td >{this.props.user.isAdmin == 1 ? 'Quản trị' : 'Khách hàng'}</td>
                <td className="text-center">
                    <Link to={"/userForm/" + this.props.user.userId}>
                        <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                    </Link>|
                    <i onClick={() => this.DeleteUser(this.props.user.userId)} className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                </td>
            </tr>
        )
    }
}

var mapDispathToProps = (dispatch, props) => {
    return {
        deleteUser: (id) => {
            dispatch(actFetchDeleteUserRequest(id));
        }
    }
}
export default connect(null, mapDispathToProps)(User);