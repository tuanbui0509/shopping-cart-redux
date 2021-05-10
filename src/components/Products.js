import React, { Component } from 'react'
class Products extends Component {
  render() {
    // nhận props từ ProductsContainer
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
                {this.props.children}

              </div>
            </section>
          </div>
        </main>
      </div>
    )
  }

}

export default Products;