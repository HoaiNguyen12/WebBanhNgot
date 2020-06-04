import React, { Component } from 'react';
import NavabarAdmin from './../NavbarAdmin';
import LeftAdmin from './../LeftAdmin';
import { connect } from 'react-redux';
import { actFetchBillsRequest } from './../../../actions/bill';
import Bill from './Bill';

class OrderList extends Component {

    componentDidMount() {
        this.props.fetchBill();
    }

    render() {
        console.log(this.props);
        var { bills } = this.props;
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
                                <h1 className="mt-3">Quản lý đơn hàng</h1>
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="text-center">STT</th>
                                            <th className="text-center">Mã đơn hàng</th>
                                            <th className="text-center">Khách hàng</th>
                                            <th className="text-center">Ngày đặt</th>
                                            <th className="text-center">Hình thức thanh toán</th>
                                            <th className="text-center">Ghi chú</th>
                                            <th className="text-center">Trạng thái</th>
                                            <th className="text-center">Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.showBills(bills)}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    showBills(bills) {
        var list = null;
        if (bills.length > 0) {
            list = bills.map((bill, index) => {
                return (<Bill
                    key={index}
                    stt={index}
                    bill={bill}
                />)
            })
        }
        return list;
    }
}


var mapStateToProps = state => {
    return {
        bills: state.bills
    }
}

var mapDispathToProps = (dispatch, props) => {
    return {
        fetchBill: () => {
            dispatch(actFetchBillsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(OrderList);