import *as types from './../constants/ActionType'
let data = JSON.parse(localStorage.getItem('CART'));
let initialState = data ? data : [];
const cart = (state = initialState, action) => {
    let { product, quantity } = action;
    let index;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity++;
            }
            else {
                state.push({
                    product,
                    quantity: quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity++;
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

let findProductInCart = (cart, product) => {
    let result = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                result = i; break;
            }
        }
    }
    return result;
}

export default cart;