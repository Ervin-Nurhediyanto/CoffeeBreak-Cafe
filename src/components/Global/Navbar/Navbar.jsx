import React from 'react'
import './Navbar.css'

export default function Navbar () {
  return (
    <nav class='col-md-1'>
      <img class='icon' src='../../assets/fork.png' alt='' />
      <img class='icon' src='../../assets/clipboard.png' alt='' />
      <img class='icon' src='../../assets/add.png' data-toggle='modal' data-target='#myModal' alt='' />
      <img class='icon' src='../../assets/product.png' alt='' />
      <img class='icon' src='../../assets/logout.png' alt='' />
    </nav>
  )
}
