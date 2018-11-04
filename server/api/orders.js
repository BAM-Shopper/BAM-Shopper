const router = require('express').Router()
const { Order, OrderItem, Product } = require('../db/models')
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

//api/orders/:id
router.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id, {
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

// PUT api/orders/:id
router.put('/:id', async (req, res, next) => {
  try {
    let orderToUpdate = await Order.findById(req.params.id)
    orderToUpdate = await orderToUpdate.update(req.body)
    res.json(orderToUpdate)
  } catch (err) {
    next(err)
  }
})

