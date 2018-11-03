const router = require('express').Router()
const { Order, OrderItem, Product } = require('../db/models')

module.exports = router

router.get('/orders/:id', async (req, res, next) => {
  try {
      const order = await Order.findOne({
        where: req.params.id,
          include: [
            {
              model: OrderItem,
              attributes: ['id', 'quantity', 'price'],
              include: [
                {
                  model: Product,
                  attributes: ['id', 'title']
                }
              ]
            }
          ]
      })
      res.json(order)
  } catch (err) {
      next(err)
  }
})
