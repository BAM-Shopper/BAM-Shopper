import React from 'react'
import { connect } from 'react-redux'
import SideBar from './SideBar'
import ProductList from './ProductList'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'all',
      filteredProd: this.props.products
    }
  }

  filterProducts = (category) => {
    this.setState({
      selected: category
    })
    const result = this.props.products.filter(product => {
      return product.category.includes(this.state.selected)
    })
    this.setState({
      filteredProd: result
    })
  }

  render() {
    return (
      <div>
        <SideBar
          filterProducts={this.filterProducts}
          categories={this.state.categories}
        />
        <ProductList products={this.state.filteredProd}/>
      </div>
    )
  }
}

const mapState = ({ products, categories }) => ({ products, categories });

export default connect(mapState)(Home);


