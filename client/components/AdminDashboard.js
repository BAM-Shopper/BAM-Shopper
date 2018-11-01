import React, { Component } from 'react'
import ProductList from "./ProductList"
import AddProductForm from './AddProductForm'

class AdminDashboard extends Component {
    constructor() {
        super()
        this.state = {
            productClicked: false,
            productAdd: false,
            orderAdd: false
        }
        this.handleProductClick = this.handleProductClick.bind(this)
        this.handleProductAdd = this.handleProductAdd.bind(this)
    }
    render() {
        const { products, user } = this.props
        const { productAdd, productClicked, orderAdd } = this.state

        if (productAdd) {
            return <AddProductForm hanlder={this.handleProductAdd} />
        } else if (orderAdd) {
            return <div />
        }

        return (
            <section>
                <div>
                    <div style={{ display: 'flex' }}>
                        <h3 onClick={() => this.setState({ productClicked: !productClicked })}>Products</h3>
                        <button
                            type='button'
                            onClick={this.handleProductAdd}
                        >Add New Product</button>
                    </div>
                    {productClicked ?
                        <div>
                            <ProductList products={products} user={user} />
                        </div>
                        : <div />
                    }
                </div>
                {/* Next */}
            </section>
        )
    }
    handleProductClick() {
        this.setState({
            productClicked: false
        })
    }
    handleProductAdd() {
        this.setState({
            productAdd: true
        })
    }
}



export default AdminDashboard
