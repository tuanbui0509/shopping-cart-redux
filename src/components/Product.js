import React, { Component } from 'react'
import *as Message from './../constants/Message'
export default class Product extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt={product.name} />
            <a href="/#">
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="/#">{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>
                {this.showRating(product.rating)}
              </li>

            </ul>
            <p className="card-text">
              {product.description}
            </p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <span 
                  // href="!#"
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title='true'
                  data-original-title="Add to Cart"
                  onClick={() => this.onAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
  }
  showRating(rating) {
    let result = [];

    if (rating > 0) {
      for (let i = 1; i <= rating; i++) {
        result.push(<i key={i} className="fa fa-star" />);
      }
      for (let i = 1; i <= 5 - rating; i++) {
        result.push(<i key={i + rating} className="far fa-star" />);

      }
    }
    return result;
  }
}