import React, { Component } from 'react';
import NavabarAdmin from './../NavbarAdmin';
import LeftAdmin from './../LeftAdmin';

import { Link } from 'react-router-dom';
class ProductList extends Component {
    render(){
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
                                <h1 className="mt-3">Quản lý sản phẩm</h1>
                                <Link type="button" className="btn btn-info btn-sm mb-3" to="/admin/productForm">Thêm sản phẩm</Link>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Loại sản phẩm</th>
                                            <th>Đơn vị tính</th>
                                            <th>Mô tả</th>
                                            <th>Gía</th>
                                            <th>Sửa</th>
                                            <th>Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><Link to="#"><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></Link></td>
                                            <td><i className="fa fa-trash-o fa-2x" aria-hidden="true"></i></td>
                                        </tr>
                                        
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

export default ProductList;