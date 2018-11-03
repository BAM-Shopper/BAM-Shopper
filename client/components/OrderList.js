import React from 'react'
import OrderListItem from './OrderListItem'

const OrderList = props => {
  if (!Array.isArray(props.orders) || props.orders.length === 0) {
    return (
      <div>
        <p>You haven't placed any orders yet!</p>
      </div>
    )
  } else {
    return (
      <div>
        {props.orders.map(order => {
          return (
            <div key={order.id}>
              <OrderListItem order={order} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default OrderList
