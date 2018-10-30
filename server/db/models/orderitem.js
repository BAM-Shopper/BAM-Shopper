const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('order item', {
  quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 1
  },
  price: {
      type: Sequelize.FLOAT,
      defaultValue: 0
  }
})

module.exports = OrderItem