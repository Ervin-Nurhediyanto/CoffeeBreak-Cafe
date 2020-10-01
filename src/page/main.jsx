import React, { Component } from 'react'
// import './index.css'
import Header from '../components/Global/Header/Header'
import Navbar from '../components/Global/Navbar/Navbar'
import Cart from '../components/Global/Sidebar/Cart/Cart'
import Home from './Main/Home/home'

export default class main extends Component {
  render () {
    return (
      // <div class='row main-container bg-dark'>
      //   <div class='mainbar'>
      //     <Header />
      //     <div class='row'>
      //       <Navbar />
      //       <Home />
      //     </div>
      //   </div>
      //   <aside class='sidebar'>
      //     <Cart />
      //     <Empty v-if='empty' />
      //     <div v-else class='scroll'>
      //       <div class='checkout'>
      //         <Checkout />
      //       </div>
      //       <div class='checkoutPay'>
      //         <CheckoutPay/>
      //       </div>
      //     </div>
      //   </aside>
      //   <Add />
      //   <CheckModal />
      // </div>
      <div className='row bg-dark'>
        <div className='col-md-9 bg-warning'>
          <Header />
          <div className='row'>
            <Navbar />
            <Home />
          </div>
        </div>
        <aside className='col-md-3 bg-danger'>
          <Cart />
        </aside>
      </div>
    )
  }
}
