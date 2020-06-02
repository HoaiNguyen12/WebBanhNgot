﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { actFetchDeleteProductRequest } from '../../../actions/product';

class Product extends Component {
    DeleteProduct(id) {
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
                this.props.deleteProduct(id);
                Swal.fire({
                    title: "Đã xóa",
                    text: "Món đã được xóa",
                    icon: "success",
                    timer: 1000,
                    showCancelButton: false,
                    showConfirmButton: false
                });
            }
            else {
                Swal.fire({
                    title: 'Đã hủy',
                    text: "Món không được xóa",
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
                <th className='col-lg-1' scope="row">{this.props.stt}</th>
                <td className='col-lg-2'>{this.props.product.productName}</td>
                <td className='col-lg-1'><img className="product-img" src={"images/" + this.props.product.productImage}/></td>
                <td className='col-lg-2'>{this.props.product.productUnit}</td>
                <td className='col-lg-2'>{this.props.product.productDescriptions}</td>
                <td className='col-lg-2'>{this.props.product.productPrice}</td>
                <td className="text-center col-lg-2"><Link to="#"><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></Link>|<i onClick={() => this.DeleteProduct(this.props.product.productId)} className="fa fa-trash-o fa-2x" aria-hidden="true"></i></td>

            </tr>
        )
    }
}

var mapDispathToProps = (dispatch, props) => {
    return {
        deleteProduct: (id) => {
            dispatch(actFetchDeleteProductRequest(id));
        }
    }
}
export default connect(null, mapDispathToProps)(Product);