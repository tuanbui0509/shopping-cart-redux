import React, { Component } from 'react'
import Product from './Product'

export default class Products extends Component {
  render() {
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
                <Product/>
                <Product/>
                <Product/>
              </div>
            </section>
          </div>
        </main>
      </div>
    )
  }
}