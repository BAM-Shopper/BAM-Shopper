const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  total: {
      type: Sequelize.FLOAT
  }
})

module.exports = Order
