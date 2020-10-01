import React from 'react'
import './Header.css'

export default function Header () {
  return (
    <header class='row justify-content-between'>
      <img class='icon' src='../../../assets/menu.png' alt='menu' />
      <h2 class>Food Items</h2>
      <div class='row'>
        <img class='icon' src='../../../assets/magnifying-glass.png' alt='search' />
      </div>
    </header>
  )
}
