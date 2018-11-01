import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminDashboard from "./AdminDashboard";

/**
 * COMPONENT
 */
export const UserHome = props => {
  const { email, isAdmin } = props.user

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <div>
        {isAdmin ? <AdminDashboard products={props.products} user={props.user} /> : <div />}
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    products: state.products
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  user: PropTypes.object,
  products: PropTypes.array
}
