import React from 'react'
import {connect} from 'react-redux'
import SideBar from './SideBar'
import ProductList from './ProductList'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'all'
    }
  }

  handelFilter = event => {
    this.setState({
      filter: event.target.value
    })
  }

  filterProducts = () => {
    return this.props.products.filter(product => {
      return product.categories.find(
        category => category.name === this.state.filter
      )
    })
  }

  render() {
    if (!this.props.products.length || !this.props.categories.length) {
      return <span />
    }
    return (
      <div>
        <SideBar
          handelFilter={this.handelFilter}
          categories={this.props.categories}
        />
        <ProductList products={this.filterProducts()} />
      </div>
    )
  }
}

const mapState = ({products, categories}) => ({products, categories})

export default connect(mapState)(Home)
