import React, { Component } from 'react'
import Product from './Product'
class Products extends Component {
  render() {
    // nhận props từ ProductsContainer
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

export default Products;