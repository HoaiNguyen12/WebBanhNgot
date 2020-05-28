import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        this.props.cartUpdated();
        var { item} = this.props;
        return (
            <tr>
                <td></td>
                <td style={{marginTop:'25px'}}>{ item.product.productName }</td>
                <td >
                    <img src={"images/" + item.product.productImage} 
                         alt={item.product.pro} 
                         className="pro-image-front" 
                         style={{width:'70px',height:'70px'}}
                    />
                </td>
                <td>{ item.product.productPrice}VNĐ</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
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
                <td>{ this.showSubTotal(item.product.productPrice, item.quantity) }VNĐ</td>
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
