const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  total: {
    type: Sequelize.FLOAT
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'created'
  }
})

module.exports = Order
