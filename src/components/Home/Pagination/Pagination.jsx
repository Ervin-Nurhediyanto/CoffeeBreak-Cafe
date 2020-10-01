import React from 'react'
import './Pagination.css'

export default function Pagination () {
  return (
    <div>
      <nav aria-label='...' class='col-md-12'>
        <ul class='pagination'>
          <li class='page-item'>
            prev
            {/* <a class='page-link' href='#'>Prev</a> */}
          </li>
          <li class='page-item disabled'>
              1
            {/* <a class='page-link'>Prev</a> */}
          </li>
          <li class='page-item'>
              2
            {/* <a class='page-link' href='#'>2</a> */}
          </li>
          <li class='page-item'>
              3
            {/* <a class='page-link' href='#'>3</a> */}
          </li>
          <li class='page-item active' aria-current='page'>
            <span class='page-link'>
              4
              <span class='sr-only'>(current)</span>
            </span>
          </li>
          <li class='page-item'>
              5
            {/* <a class='page-link' href='#'>{4 + 1}</a> */}
          </li>
          <li class='page-item'>
              6
            {/* <a class='page-link' href='#'>{4 + 2}</a> */}
          </li>
          <li class='page-item'>
              7
            {/* <a class='page-link' href='#'>Next</a> */}
          </li>
          <li class='page-item disabled'>
              next
            {/* <a v-show='page >= totalPage' class='page-link'>Next</a> */}
          </li>
        </ul>
      </nav>
    </div>
  )
}
