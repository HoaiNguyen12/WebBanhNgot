import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HeaderAdmin extends Component {
    render() {
        return (
            <tr>
                <td className='col-lg-1'>{this.props.stt + 1}</td>
                <td className='col-lg-2'>{this.props.product.productName}</td>
                <td className='col-lg-1'>{this.props.product.productPrice}</td>
                <td className='col-lg-2'><img src={"images/" + this.props.product.productImage}/></td>
                <td className='col-lg-1'>{this.props.product.productUnit}</td>
                <td className='col-lg-2'>{this.props.product.productDescriptions}</td>
                <td className='col-lg-1'><NavLink to='' className="fa fa-edit"></NavLink>|<NavLink to='' className="fa fa-times"></NavLink></td>
                
            </tr>
        )
    }
}

export default HeaderAdmin;