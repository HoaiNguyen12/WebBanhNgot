import * as types from '../contraints/index';
import callApi from '../utils/apiCaller';


export const actFetchBillsRequest = () => {
    return (dispatch) => {
        debugger;
        return callApi('bills','GET', null).then(res => {
            dispatch(actFetchBills(res.data));
        });
    };
}

export const actFetchBills = (bills) =>{
    return {
        type: types.FETCH_BILL,
        bills
    };
}



export const actUpdateStatusBillRequest = (id) => {
    return (dispatch) => {
        return callApi("bills" + id, "PUT", null).then(res => {
            console.log(res);
            dispatch(actUpdateStatusBill(id))
        });
    }
}

export const actUpdateStatusBill = (bill) => {
    return {
        type: types.UPDATE_STATUS_BILL,
        bill
    }
}

