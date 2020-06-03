import * as types from '../contraints/index';

var initState = [];

const itemEditBill = (state = initState, action) => {
    switch (action.type) {
        case types.EDIT_BILL:
            return action.bill;
        default :
            return state;
    }

}

export default itemEditBill;