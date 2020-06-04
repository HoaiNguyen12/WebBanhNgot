import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actGetBillRequest, actUpdateBillRequest} from '../../../actions/bill';
import { connect} from 'react-redux';
class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billId: 0,
            userId: 0,
            billDate: '',
            billStatus: '',
            billNote: '',
            billPayment: ''
        };
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var { id } = this.props?.match?.params;
            this.props.onEditBill(id);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditBill){
            var { itemEditBill} = nextProps;
            this.setState({
                billId: itemEditBill.billId,
                userId: itemEditBill.userId,
                billDate: itemEditBill.billDate,
                billStatus: itemEditBill.billStatus,
                billNote: itemEditBill.billNote,
                billPayment: itemEditBill.billPayment
            });
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    onSave = (e) => {
        console.log(this.state);
        e.preventDefault();
        var { userId, billId, billDate, billNote, billPayment, billStatus } = this.state;
        var bill = {
            billId: billId,
            userId: userId,
            billDate: billDate,
            billStatus: billStatus,
            billNote: billNote,
            billPayment: billPayment
        }
        this.props.onUpdateBill(bill);
        window.open('/admin/orderList', '_self')
    }
    render(){
        var { billStatus} = this.state;
        return(
            <div className="container p-5">
                <h1 style={{textAlign: 'center'}}>Cập nhật đơn hàng</h1>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label style={{fontSize:'18px'}}>Trạng thái:  </label>
                        <select class="form-control" name="billStatus" value={billStatus} onChange={this.onChange}>
                            <option value="Chưa giao hàng">Chưa giao hàng</option>
                            <option value="Đang giao hàng">Đang giao hàng</option>
                            <option value="Đã giao hàng">Đã giao hàng</option>
                            <option value="Không giao được">Không giao được</option>
                        </select>
                    </div>
                    <Link className="btn btn-primary mr-2" to="/admin/orderList">Quay Lại</Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itemEditBill: state.itemEditBill
    } 
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onEditBill: (id) => {
            dispatch(actGetBillRequest(id));
        },
        onUpdateBill: (bill) => {
            dispatch(actUpdateBillRequest(bill));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
