import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminDashboard from "./AdminDashboard";
import OrderList from './OrderList'
import ReviewList from './ReviewList'

export class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myOrdersClicked: false,
      myReviewsClicked: false
    }
  }

  render() {
    const { email, isAdmin } = this.props.user
    const { orders, reviews } = this.props
    const { myOrdersClicked, myReviewsClicked } = this.state
    // const myOrders = orders.filter(order => order.userId === props.user.id)
    const myOrders = orders.filter(order => order.userId === 7)
    // const myReviews = reviews.filter(review => review.userId === props.user.id)
    const myReviews = reviews.filter(review => review.userId === 7)
    return (
      <div className='ui container'>
        <h3>Welcome, {email}!</h3>
        <button
          type='button'
          className='ui primary button'
          style={{ marginLeft: '5px' }}
      >Manage Account</button>
        <br />
        <div>
          <h3 className='admin' onClick={() => this.setState({ myOrdersClicked: !myOrdersClicked })}>My Orders</h3>
          {myOrdersClicked ? <OrderList orders={myOrders} />
            : <div />
          }
          <hr />
        </div>
        <h3 className='admin' onClick={() => this.setState({ myReviewsClicked: !myReviewsClicked })}>My Reviews</h3>
        {myReviewsClicked ? <ReviewList reviews={myReviews} />
          : <div />}
        <hr />
        <br />
        <div>
          {isAdmin ? <AdminDashboard /> : <div />}
        </div>

      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    products: state.products,
    orders: state.orders,
    reviews: state.reviews,
    users: state.users
  }
}

export default connect(mapState)(UserHome)

UserHome.propTypes = {
  user: PropTypes.object,
  orders: PropTypes.array
}
