const router = require('express').Router()
const {Order, OrderItem, Product} = require('../db/models')
module.exports = router

//GET api/orders/
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

//GET api/orders/:id
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

// POST api/orders/
router.post('/', async (req, res, next) => {
  try {
    let newOrder
    if (req.user) {
      newOrder = await Order.create({
        total: req.body.total,
        userId: req.user.id
      })
    } else {
      newOrder = await Order.create({
        total: req.body.total
      })
    }
    res.json(newOrder)
  } catch (err) {
    next(err)
  }
})

// POST api/orders/:id/item
router.post('/:id/item', async (req, res, next) => {
  try {
    const newItem = await OrderItem.create({
      quantity: req.body.quantity,
      price: req.body.price,
      orderId: req.params.id,
      productId: req.body.productId
    })
    res.json(newItem)
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
