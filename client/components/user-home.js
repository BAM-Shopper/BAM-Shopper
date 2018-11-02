import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import OrderList from './OrderList'

export const UserHome = props => {
  const {email, orders, userId} = props
  const myOrders = orders.filter(order => order.userId === 7)
  return (
    <div>
      <h3>Welcome, {email}</h3>
      <OrderList orders={myOrders} />
    </div>
  )
}

const mapState = state => {
  return {
    userId: state.user.id,
    email: state.user.email,
    orders: state.orders
  }
}

export default connect(mapState)(UserHome)

UserHome.propTypes = {
  email: PropTypes.string
}
