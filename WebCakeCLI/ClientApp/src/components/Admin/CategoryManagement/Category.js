import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actDeleteCategoryRequest } from '../../../actions/category';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class Category extends Component {
    
    DeleteCategory(id) {
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
                this.props.deleteCategory(id);
                Swal.fire({
                    title: "Đã xóa",
                    text: "Loại món đã được xóa",
                    icon: "success",
                    timer: 1000,
                    showCancelButton: false,
                    showConfirmButton: false
                });
            }
            else {
                Swal.fire({
                    title: 'Đã hủy',
                    text: "Loại món không được xóa",
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
                <td scope="row">{this.props.stt + 1}</td>
                <td>{this.props.category.categoryName}</td>
                <td className="text-center"><Link to={"/admin/category/edit/" + this.props.category.categoryId}><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></Link>|<i onClick={() => this.DeleteCategory(this.props.category.categoryId)} className="fa fa-trash-o fa-2x" aria-hidden="true"></i></td>
            </tr>
        )
    }
}


var mapDispathToProps = (dispatch, props) => {
    return {
        deleteCategory: (product) => {
            dispatch(actDeleteCategoryRequest(product))
        }
    }
}

export default connect(null, mapDispathToProps)(Category);