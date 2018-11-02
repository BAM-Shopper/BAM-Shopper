const router = require('express').Router()
const {Order, OrderItem, Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: OrderItem,
          attributes: ['quantity', 'price'],
          include: [
            {
              model: Product,
              attributes: ['title']
            }
          ]
        }
      ]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})
