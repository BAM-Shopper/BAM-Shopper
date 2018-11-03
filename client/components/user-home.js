import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminDashboard from "./AdminDashboard";
import OrderList from './OrderList'

export const UserHome = props => {
  const { email, isAdmin } = props.user
  const { orders } = props
  const myOrders = orders.filter(order => order.userId === props.user.id)

  return (
    <div className='ui container'>
      <h3>Welcome, {email}</h3>
      <OrderList orders={myOrders} />
      <div>
        {isAdmin ? <AdminDashboard user={props.user} /> : <div />}
      </div>

    </div>
  )
}

const mapState = state => {
  return {
    user: state.user,
    orders: state.orders,
    users: state.users
  }
}

export default connect(mapState)(UserHome)

UserHome.propTypes = {
  user: PropTypes.object,
  orders: PropTypes.array,
}
