let initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: '',
        description: 'Sản phẩm của apple',
        price: 500,
        inventory: 100
    }, 
    {
        id: 2,
        name: 'Samsung S21 Ultra',
        image: '',
        description: 'Sản phẩm của samsung',
        price: 1500,
        inventory: 10
    }
    , {
        id: 3,
        name: 'BPhone 3',
        image: '',
        description: 'Sản phẩm của Bphone Việt Nam',
        price: 700,
        inventory: 200
    }
];

const product = (state = initialState,action)=>{
    switch (action.type) {
        case "ABC":
            
            break;
    
        default:
            return [...state];
    }
}

export default product;