import * as types from '../contraints/index';

var initState = [{
    id: 1,
    Name: 'Special Drinks 1',
    Image: 'images/img-01.jpg',
    Description: 'Sed id magna vitae eros sagittis euismod.',
    Price: 6000000
},
{
    id: 1,
    Name: 'Special Drinks 2',
    Image: 'images/img-02.jpg',
    Description: 'Sed id magna vitae eros sagittis euismod.',
    Price: 7000000
}];

const product = (state = initState, action) => {
    switch (action.type)
    {
        case types.GET_ALL_PRODUCT:
            return [...state]
        case types.FETCH_PRODUCT:
            state = action.products;
            return [...state];
        default :
            return [...state]
    }

}

export default product;