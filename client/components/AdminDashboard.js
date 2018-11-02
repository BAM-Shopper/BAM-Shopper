import React, { Component } from 'react'
import ProductList from "./ProductList"
import AddProductForm from './AddProductForm'

export class AdminDashboard extends Component {
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
            return <AddProductForm handleProductAdd={this.handleProductAdd} />
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
                            onClick={() => this.setState({ productAdd: !productAdd })}
                        >Add New Product</button>
                    </div>
                    {productClicked ?
                        <div>
                            <ProductList products={products} user={user} />
                        </div>
                        : <div />
                    }

                </div>
                {/* Orders */}
                {/* Users */}
            </section>
        )
    }
    handleProductClick() {
        this.setState({
            productClicked: false
        })
    }
    handleProductAdd() {
        const { productAdd } = this.state
        this.setState({
            productAdd: !productAdd
        })
    }
}



export default AdminDashboard
