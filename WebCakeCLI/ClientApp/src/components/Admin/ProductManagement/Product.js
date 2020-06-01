import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
        return (
            <tr>
                <th className='col-lg-1' scope="row">{this.props.stt}</th>
                <td className='col-lg-2'>{this.props.product.productName}</td>
                <td className='col-lg-1'><img src={"images/" + this.props.product.productImage}/></td>
                <td className='col-lg-2'>{this.props.product.productUnit}</td>
                <td className='col-lg-2'>{this.props.product.productDescriptions}</td>
                <td className='col-lg-2'>{this.props.product.productPrice}</td>
                <td className="text-center col-lg-2"><Link to="#"><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></Link>|<i className="fa fa-trash-o fa-2x" aria-hidden="true"></i></td>

            </tr>
        )
    }
}

export default Product;