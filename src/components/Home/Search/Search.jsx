import React from 'react'
import './Search.css'

export default function Search () {
  return (
    <div>
      <article class='search-box'>
        <input type='text' placeholder='search......' />
        <i class='fa fa-search' aria-hidden='true' />
      </article>
    </div>
  )
}
