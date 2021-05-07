let initialState = [
    {
        id: 1,
        name: 'Apple iPhone 12 Pro Max 512Gb VN/A',
        image: 'https://stcv4.hnammobile.com/uploads/products/colors/7/apple-iphone-12-pro-max-1-sim-128gb-01602658120.jpg',
        description: 'Sản phẩm của apple',
        price: 500,
        inventory: 100,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung S21 Ultra',
        image: 'https://stcv4.hnammobile.com/uploads/products/colors/5/samsung-galaxy-s21-ultra-5g-g998-256gb-01616467883.jpg',
        description: 'Sản phẩm của Samsung',
        price: 1500,
        inventory: 10,
        rating: 3
    }
    , {
        id: 3,
        name: 'Xiaomi Redmi Note 10 Pro 128GB Ram 8GB',
        image: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/08/redmi-mi10-ultra-white.jpg',
        description: 'Sản phẩm của Xiaomi Redmi Note 10 Pro China',
        price: 700,
        inventory: 200,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        case "ABC":
            break;
        default:
            return [...state];
    }
}

export default products;