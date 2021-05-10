import *as types from './../constants/ActionType'
let data = JSON.parse(localStorage.getItem('CART'));
let initialState = [
    {
        product: {
            id: 1,
            name: 'Apple iPhone 12 Pro Max 512Gb VN/A',
            image: 'https://stcv4.hnammobile.com/uploads/products/colors/7/apple-iphone-12-pro-max-1-sim-128gb-01602658120.jpg',
            description: 'Sản phẩm của apple',
            price: 500,
            inventory: 100,
            rating: 4
        },
        quantity: 5
    },
    {
        product:{
            id: 3,
            name: 'Xiaomi Redmi Note 10 Pro 128GB Ram 8GB',
            image: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/08/redmi-mi10-ultra-white.jpg',
            description: 'Sản phẩm của Xiaomi Redmi Note 10 Pro China',
            price: 700,
            inventory: 200,
            rating: 5
        },
        quantity: 4
    }
]
//  data ? data : [];
const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            return [...state];
        default:
            return [...state];
    }
}

export default cart;