import React from 'react'
import {connect} from 'react-redux'
import SideBar from './SideBar'
import ProductList from './ProductList'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'all',
      query: '',
      currentlyDisplayed: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      this.setState({ currentlyDisplayed: this.props.products })
    }
  }

  handleInputChange = evt => {
    const filtered = this.props.products.filter(product => {
      return product.title.toLowerCase().startsWith(evt.target.value.toLowerCase())
    })
    this.setState({
      query: evt.target.value,
      currentlyDisplayed: filtered
    })
  }

  handelFilter = event => {
    this.setState({
      filter: event.target.value
    })
    this.filterProducts()
  }

  filterProducts = () => {
    const filtered = this.props.products.filter(product => {
      return product.categories.find(
        category => category.name === this.state.filter
      )
    })
    this.setState({
      currentlyDisplayed: filtered
    })
  }

  render() {
    if (!this.props.products.length || !this.props.categories.length) {
      return <span />
    }
    return (
<<<<<<< HEAD
      <div style={{display: 'flex'}}>
=======
      <div>
        <form>
          <input
            placeholder="Search movies"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
        </form>
>>>>>>> 8223224770ce2482a447775e9c78ec6aceded6b2
        <SideBar
          handelFilter={this.handelFilter}
          categories={this.props.categories}
        />
        <ProductList products={this.state.currentlyDisplayed} />
      </div>
    )
  }
}

const mapState = ({products, categories}) => ({products, categories})

export default connect(mapState)(Home)
