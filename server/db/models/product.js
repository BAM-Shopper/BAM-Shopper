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
    category: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: ['all']
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://bit.ly/2CQDGUt'
    }
})


module.exports = Product