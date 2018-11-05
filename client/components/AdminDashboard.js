import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductList from "./ProductList"
import AddProductForm from './AddProductForm'
import AddCategoryForm from "./AddCategoryForm"
import UserList from './UserList'
import OrderList from "./OrderList";

export class AdminDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productClicked: false,
            productAdd: false,
            ordersClicked: false,
            usersClicked: false,
            currentlyDisplayed: [],
            filter: ''
        }
        this.handleProductClick = this.handleProductClick.bind(this)
        this.handleProductAdd = this.handleProductAdd.bind(this)
    }

    //help!! this is a hackey implementation
    UNSAFE_componentWillReceiveProps() {
        this.setState({ currentlyDisplayed: this.props.orders })
    }

    componentDidUpdate(prevProps) {
        if (this.props.orders !== prevProps.orders) {
            this.setState({ currentlyDisplayed: this.props.orders })
        }
    }

    handelOrderFilter = event => {
        this.setState({
            filter: event.target.value
        })

        if (this.state.filter === 'all') {
            this.setState({
                currentlyDisplayed: this.props.orders
            })
        } else {
            this.filterOrders()
        }
    }

    filterOrders = () => {
        const filteredOrders = this.props.orders.filter(order => {
            return order.status === this.state.filter
        })
        this.setState({
            currentlyDisplayed: filteredOrders
        })
    }

    render() {
        const { products, user, categories, users } = this.props
        const { productAdd, productClicked, ordersClicked, usersClicked } = this.state
        const orders = this.state.currentlyDisplayed
        const orderStatuses = ['all', 'created', 'processing', 'cancelled', 'completed']

        if (productAdd) {
            return <AddProductForm handleProductAdd={this.handleProductAdd} />
        }

        return (
            <section style={{ paddingTop: '10px' }}>
                <div>
                    <div style={{ display: 'flex' }}>
                        <h3 onClick={() => this.setState({ productClicked: !productClicked })} className='admin'>Products</h3>
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
                    <h3 onClick={() => this.setState({ usersClicked: !usersClicked })} className='admin'>Users</h3>
                </div>
                {usersClicked ?
                    <div>
                        <UserList users={users} />
                    </div>
                    : <div />
                }
                <div style={{ display: 'flex' }}>
                    <h3 onClick={() => this.setState({ ordersClicked: !ordersClicked })} className='admin'>Orders</h3>
                </div>
                {ordersClicked ?
                    <div>
                        <div>
                            <h4>Filter Orders</h4>
                            <div style={{ display: 'flex' }}>
                                {orderStatuses.map((orderStatus, idx) => {
                                    return (
                                        <div key={parseInt(idx.toString(), 10)} style={{ margin: '5px' }}>
                                            <button
                                                className='ui blue basic button'
                                                type="button"
                                                value={orderStatus}
                                                onClick={this.handelOrderFilter}
                                            >
                                                {orderStatus}
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <OrderList orders={orders} />
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
        products: state.products,
        orders: state.orders
    }
}

export default connect(mapState)(AdminDashboard)

AdminDashboard.propTypes = {
    products: PropTypes.array,
    categories: PropTypes.array,
    users: PropTypes.array,
    orders: PropTypes.array
}


