import React, { Component } from 'react'
// import './home.css'
import Search from '../../../components/Home/Search/Search'
import Sort from '../../../components/Home/Sort/Sort'
import Card from '../../../components/Home/Card/Card'
import Pagination from '../../../components/Home/Pagination/Pagination'
// import TableInput from '../components/TableInput'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

class Home extends Component {
  constructor () {
    super()
    this.state = {
    //   nama: '',
    //   email: '',
    //   password: '',
    //   containerData: []
    }
  }

  componentDidMount () {
    // console.log('ini compoenet did mount')
    // console.log('nama saya : ' + this.state.nama)
  }

  handleClick () {
    // const data = {
    //   nama: this.state.nama,
    //   email: this.state.email,
    //   password: this.state.password
    // }
    // const datacontainer = this.state.containerData
    // datacontainer.push(data)

    // axios.get('http://locahost:8000/products')
    //   .then((res) => {
    //     alert('input berhasil')
    //   })
    //   .catch((err) => {
    //     alert('server sedang bermasalah coba lagi besok')
    //   })
    // this.setState({
    //   containerData: datacontainer,
    //   nama: '',
    //   email: '',
    //   password: ''
    // })
  }

  // componentDidUpdate(){
  //   console.log('ini componentDidUpdate')
  // }
  componentWillUnmount () {
    // console.log('ini compoentWillUnmount')
  }

  handleChange (e) {
    // this.setState({
    //   [e.target.name]: e.target.value
    // })
  }

  render () {
    // const handleClickdalam = () => {
    //   alert('janga juga klik dalam')
    // }
    return (
      <main class='col-md-11'>
        <div class='row'>
          <div class='col-md-12 col-sm-12'>
            <div class='search-sort row'>
              <div class='col-md-9 col-sm-9 d-flex justify-content-start search'>
                <Search />
              </div>
              <div class='col-md-2 col-sm-2 sort'>
                <Sort />
              </div>
            </div>
          </div>
          <article class='col main'>
            <Card />
          </article>
          <Pagination />
        </div>
      </main>
    )
  }
}

export default Home
