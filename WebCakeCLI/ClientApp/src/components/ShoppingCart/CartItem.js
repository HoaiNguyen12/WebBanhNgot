import React, { Component } from 'react';

class CartItem extends Component {

    render() {

        return (
            <tr>
                <td>BanhNgot</td>
                <td>100$</td>
                <td className="center-on-small-only">
                    <span className="qty">10  </span>
                    <div className="btn-group radio-group" data-toggle="buttons" >
                        <label  
                            className="btn btn-sm">
                            <a><i class="fa fa-minus" aria-hidden="true"></i></a>
                        </label>
                        <label 
                            className="btn btn-sm ">
                            <a><i class="fa fa-plus" aria-hidden="true"></i></a>
                        </label>
                    </div>
                </td>
                <td>100$</td>
                <td>
                    <button type="button" className="btn" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item" >
                        <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                    </button>
                </td>
            </tr>

    );
  }


}

export default CartItem;
