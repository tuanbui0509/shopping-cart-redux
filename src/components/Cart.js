import React, { Component } from 'react'
import CartItem from './CartItem';
import CartResult from './CartResult';
export default class Cart extends Component {
  render() {
    let { children } = this.props;
    console.log(children);
    return (
      <div>
        {/* Cart */}
        <section className="section">
          <div className="table-responsive">
            <table className="table product-table">
              <thead>
                <tr>
                  <th />
                  <th>Sản Phẩm</th>
                  <th>Giá</th>
                  <th>Số Lượng</th>
                  <th>Tổng Cộng</th>
                  <th />
                </tr>
              </thead>
              <tbody>
              {children}
                {/* <CartResult /> */}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    )
  }
}