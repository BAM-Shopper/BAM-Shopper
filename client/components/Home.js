import React from 'react'
import { connect } from 'react-redux'
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

  componentDidMount() {
    this.setState({ currentlyDisplayed: this.props.products })
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
      <div className='ui container'>
        <div className='ui search'>
          <div className='ui icon input'>
            <input
              className="prompt"
              type="text"
              placeholder="Search movies"
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
            <i class="search icon" />

          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <SideBar
            handelFilter={this.handelFilter}
            categories={this.props.categories}
          />
          <ProductList products={this.state.currentlyDisplayed} user={this.props.user} />
        </div>
      </div>
    )
  }
}

const mapState = ({ products, categories, user }) => ({ products, categories, user })

export default connect(mapState)(Home)
