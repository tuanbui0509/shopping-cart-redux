import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'

class Products extends Component {
  render() {
    let { products } = this.props;
    return (
      <div>
        {/* Main */}
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <section className="section">
              <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
              <div className="row">
                {/* Product */}
                {this.showProducts(products)}

              </div>
            </section>
          </div>
        </main>
      </div>
    )
  }
  showProducts(products) {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        console.log(product);
        return <Product key={index} product={product} />
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    // producer index.js
    products: state.products
  }
};

export default connect(mapStateToProps, null)(Products);