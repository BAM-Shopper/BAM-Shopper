//this naming is confusing but I can't think of a different way to name it - this component refers to the individual order components that are mapped over within OrderList

import React from 'react'
import { Link } from 'react-router-dom'

const OrderListItem = props => {
  const order = props.order

  return (
    <div>
      <Link to={`/account/orders/${order.id}`}>
        Order #{order.id}
      </Link>
      <br />
      Order placed on {order.createdAt.slice(0, 10)}
      <br />
    </div>
  )
}

export default OrderListItem
