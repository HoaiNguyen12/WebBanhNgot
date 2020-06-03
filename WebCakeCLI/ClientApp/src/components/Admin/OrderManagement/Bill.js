import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Bill extends Component {
    render() {
        console.log(this.props);
        return (
            <tr>
                <th>{this.props.stt + 1}</th>
                <td >{this.props.bill.billId}</td>
                <td >{this.props.bill.userId}</td>
                <td >{this.props.bill.billDate}</td>
                <td >{this.props.bill.billPayment}</td>
                <td >{this.props.bill.billNote}</td>
                <td >{this.props.bill.billStatus}</td>
                <td className="text-center "><Link to="#"><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></Link></td>
            </tr>
        )
    }
}

export default Bill;