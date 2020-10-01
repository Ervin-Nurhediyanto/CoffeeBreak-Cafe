import React, { Component } from 'react'

class TableInput extends Component {
  constructor (props) {
    super()
    this.state = {
      title: props.title
    }
  }

  render () {
    const { data } = this.props
    return (
      <div>
        <h2>{this.state.title}</h2>
        <ul>
          {data.map((item) =>
            <li>
              {item.nama} | {item.email} # {item.password}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
export default TableInput
