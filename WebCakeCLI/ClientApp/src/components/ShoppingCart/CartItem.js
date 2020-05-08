import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        var { item} = this.props;
        var { quantity} = item;
        return (
            <tr>
                <td></td>
                <td style={{marginTop:'25px'}}>{ item.product.name }</td>
                <td>{ item.product.price}VNĐ</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons" >
                        <label  onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                            className="btn btn-sm">
                            <a><i className="fa fa-minus" aria-hidden="true"></i></a>
                        </label>
                        <label onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                            className="btn btn-sm ">
                            <a><i className="fa fa-plus" aria-hidden="true"></i></a>
                        </label>
                    </div>
                </td>
                <td>{ this.showSubTotal(item.product.price, item.quantity) }VNĐ</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item" onClick= { () => this.onDelete(item.product)} >
                        <i className="fa fa-trash-o fa-1x" aria-hidden="true"></i>
                    </button>
                </td>
            </tr>

    );
  }

  onDelete = (product) => {
    var { onDeleteProductInCart} = this.props;
    onDeleteProductInCart(product);
  }

  onUpdateQuantity = (product, quantity) => {
    if(quantity > 0){
        var { onUpdateProductInCart} = this.props;
        onUpdateProductInCart(product,quantity);
    }
  }
  showSubTotal = (price, quantity) => {
      return price * quantity;
  }

}

export default CartItem;
