import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductList from "./ProductList"
import AddProductForm from './AddProductForm'
import AddCategoryForm from "./AddCategoryForm"
import AllUsers from './AllUsers'

export class AdminDashboard extends Component {
    constructor() {
        super()
        this.state = {
            productClicked: false,
            productAdd: false,
            ordersClicked: false,
            usersClicked: false
        }
        this.handleProductClick = this.handleProductClick.bind(this)
        this.handleProductAdd = this.handleProductAdd.bind(this)
    }
    render() {
        const { products, user, categories, users } = this.props
        const { productAdd, productClicked, ordersClicked, usersClicked } = this.state

        if (productAdd) {
            return <AddProductForm handleProductAdd={this.handleProductAdd} />
        }

        return (
            <section style={{paddingTop: '10px'}}>
                <div>
                    <div style={{ display: 'flex' }}>
                        <h3 onClick={() => this.setState({ productClicked: !productClicked })}>Products</h3>
                        <button
                            type='button'
                            className='ui primary button'
                            style={{ marginLeft: '5px' }}
                            onClick={() => this.setState({ productAdd: !productAdd })}
                        >Add New Product</button>
                    </div>
                    {productClicked ?
                        <div>
                            <div>
                                <AddCategoryForm categories={categories} />
                            </div>
                            <ProductList products={products} user={user} />
                        </div>
                        : <div />
                    }

                </div>
                <div style={{ display: 'flex' }}>
                    <h3 onClick={() => this.setState({ usersClicked: !usersClicked })}>Users</h3>
                </div>
                {usersClicked ?
                    <div>
                        <AllUsers users={users} />
                    </div>
                    : <div />
                }
                <div style={{ display: 'flex' }}>
                    <h3 onClick={() => this.setState({ ordersClicked: !ordersClicked })}>Orders</h3>
                </div>
                {ordersClicked ?
                    <div>
                        <p>yerp</p>
                    </div>
                    : <div />
                }
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

const mapState = state => {
    return {
        users: state.users,
        categories: state.categories,
        products: state.products
    }
}

export default connect(mapState)(AdminDashboard)

AdminDashboard.propTypes = {
    products: PropTypes.array,
    categories: PropTypes.array,
    users: PropTypes.array
}


