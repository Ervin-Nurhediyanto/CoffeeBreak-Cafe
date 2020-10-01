import React, { Component } from 'react'
import './index.css'
import Header from '../components/Global/Header/Header'
import Navbar from '../components/Global/Navbar/Navbar'
import Cart from '../components/Global/Sidebar/Cart/Cart'
import Home from './Main/Home/home'

export default class index extends Component {
  render () {
    return (
      // <div class='index-container bg-dark'>
      <div class='row bg-dark'>
        <div class='mainbar'>
          <Header />
          <div class='row'>
            <Navbar />
            {/* <router-view /> */}
            <Home />
          </div>
        </div>
        <aside class='sidebar'>
          <Cart />
          {/* <Empty v-if='empty' /> */}
          <div v-else class='scroll'>
            <div class='checkout'>
              {/* <Checkout /> */}
            </div>
            <div class='checkoutPay'>
              {/* <CheckoutPay/> */}
            </div>
          </div>
        </aside>
        {/* </div> */}
        {/* <Add /> */}
        {/* <CheckModal /> */}
      </div>
    )
  }
}
