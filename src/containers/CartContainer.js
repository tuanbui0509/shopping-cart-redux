import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import CartResult from '../components/CartResult'
import CartItem from '../components/CartItem';
import Cart from '../components/Cart'
import * as Message from '../constants/Message'
import { actDeleteProductInCart, actChangeMessage } from './../actions/index'
class CartContainer extends Component {
    render() {
        let { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        let { onDeleteInCart,onChangeMessage } = this.props;
        let result =
            <tr>
                <td>{Message.MSG_CART_EMPTY}</td>
            </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key={index} item={item} index={index} 
                    onDeleteInCart={onDeleteInCart} onChangeMessage={onChangeMessage} />
                );
            });
        }
        return result;
    }
    showTotalAmount = (cart) => {
        let total = 0;
        if (cart.length > 0) {
            total = cart.reduce((initialValue, current) => {
                return initialValue + (current.product.price * current.quantity);
            }, 0);
        }
        return (<CartResult total={total} />);
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    return {
        // reducer index.js
        cart: state.cart
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);