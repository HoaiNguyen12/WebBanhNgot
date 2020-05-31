import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 

class categoryForm extends Component {
    render(){
        return(
            <div className="container p-5">
                <h1 style={{textAlign: 'center'}}>Cập nhật đơn hàng</h1>
                <form >
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Trạng thái:  </label>
                        <select class="form-control" name="sellist1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <Link className="btn btn-primary mr-2" to="/admin/orderList">Quay Lại</Link>
                    <button type="button" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
        )
    }
}

export default categoryForm;