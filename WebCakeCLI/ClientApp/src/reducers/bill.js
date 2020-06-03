import * as types from '../contraints/index';

var initState = [];

const bills = (state = initState, action) => {
    var { bill } = action;
    switch (action.type) {
        case types.FETCH_BILL:
            state = action.bills;
            return [...state];
        case types.UPDATE_STATUS_BILL:
            var index = findProduct(state, bill.billId);
            state[index] = bill;
            return [...state];
        default :
            return [...state]
    }

}
var findProduct = (bills, id) => {
    var index = -1;
    if (bills.length > 0) {
        for (var i = 0; i < bills.length; i++) {
            if (bills[i].billId === id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default bills;