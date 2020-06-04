import * as types from '../contraints/index';

var initState = {
    productDescriptions: '',
    productId: 0,
    productName: '',
    productPrice: 0,
    productUnit: '',
    categoryId: 1,
    productImage: '111.jpg',
    productSize: 'nhỏ'
};

const itemEditProduct = (state = initState, action) => {
    switch (action.type) {
        case types.DETAIL_PRODUCT:
            return action.product;
        default :
            return state;
    }

}

export default itemEditProduct;