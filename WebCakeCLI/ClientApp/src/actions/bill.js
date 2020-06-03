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


export const actGetBillRequest = (id) => {
    return dispatch => {
        return callApi(`bills/${id}`,'GET', null).then(res => {
            dispatch(actGetBill(res.data));
        });
    }
}

export const actGetBill = (bill) => {
    return {
        type: types.EDIT_BILL,
        bill
    }
}

export const actUpdateBillRequest = (bill) => {
    return dispatch => {
        return callApi(`bills/${bill.billId}`,'PUT', bill).then(res => {
            dispatch(actUpdateBill(res.data));
        });
    }
}

export const actUpdateBill = (bill) => {
    return {
        type: types.UPDATE_STATUS_BILL,
        bill
    }
}

