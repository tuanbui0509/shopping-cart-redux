import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Message from './components/Message';
import Cart from './components/Cart';
export default class App extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <Header />
        {/* Main */}
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <Products />
            {/* Message */}
            <Message />
            {/* Cart */}
            <Cart />
          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    )
  }
}

