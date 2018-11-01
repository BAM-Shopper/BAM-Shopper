const router = require('express').Router()
const {Cart, CartItem} = require('../db/models')

module.exports = router

// /api/carts/
router.get('/', async (req, res, next) => {
  try {
    const carts = await Cart.findAll()
    res.json(carts)
  } catch (err) {
    next(err)
  }
})

// /api/carts/:id
router.get('/:id', async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.id, {
      include: [CartItem]
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})
