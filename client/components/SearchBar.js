import React from 'react'
<<<<<<< HEAD
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const term = evt.target.value
    const result = this.props.products.filter(product => {
      product.name.toLowerCase().includes(term.toLowerCase())
    })
    console.log(result)
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search movies"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <button
          type='submit'
          onSubmit={this.handleSubmit}
        >Search</button>
      </form>
    )
  }
}

const mapState = ({products}) => ({products})

export default connect(mapState)(Search)
=======

const SearchBar = () => {
  return (
    <p>I am a search bar!</p>
  )
}

export default SearchBar
>>>>>>> master
