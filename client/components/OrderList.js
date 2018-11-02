import React from 'react'
import SingleOrder from './SingleOrder'

const OrderList = props => {
  if (!Array.isArray(props.orders) || props.orders.length === 0) {
    return <p>No Orders</p>
  } else {
    return (
      <div>
        {props.orders.map(order => {
          return (
            <div key={order.id}>
              <SingleOrder order={order} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default OrderList
