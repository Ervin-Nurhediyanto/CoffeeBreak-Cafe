import React from 'react'
import './Card.css'

export default function Card () {
  return (
    <div class='row'>
      <div>
        <div class='select container-img'>
          <img class='image' src='../../../assets/Screenshots/landingpage.png' alt='' />
          {/* <img v-show='product.cardSelect' v-filter='brightness' class='image' /> */}
          <div class='tick' />
        </div>
        <h5>Product name</h5>
        <h5>Rp.10.000</h5>
      </div>
    </div>
  )
}
