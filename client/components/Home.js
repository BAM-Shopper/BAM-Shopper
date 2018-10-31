import React from 'react'
import {connect} from 'react-redux'
import SideBar from './SideBar'
import ProductList from './ProductList'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'all',
      filteredProd: []
    }
  }

  filterProducts = event => {
    const category = event.target.value
    console.log('CLICK!')
    this.setState({
      selected: category
    })
    console.log('products', this.props.products)

    const result = this.props.products.filter(product => {
      for (var i = 0; i < product.categories.length; i++) {
        if (product.categories[i].name === this.state.selected) {
          return true
        }
      }
    })
    console.log('result', result)
    this.setState({
      filteredProd: result
    })
  }

  render() {
    if (!this.props.products.length || !this.props.categories.length) {
      return <div>HI</div>
    }
    console.log('this.props.products', this.props.products)
    console.log('this.props.categories', this.props.categories)

    return (
      <div>
        <SideBar
          filterProducts={this.filterProducts}
          categories={this.props.categories}
        />
        <ProductList products={this.state.filteredProd} />
      </div>
    )
  }
}

const mapState = ({products, categories}) => ({products, categories})

export default connect(mapState)(Home)
