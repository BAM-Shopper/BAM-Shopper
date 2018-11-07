const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://bit.ly/2CQDGUt'
  },
  isAvailible: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

module.exports = Product
