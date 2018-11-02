const router = require('express').Router()
const {Cart, CartItem} = require('../db/models')

module.exports = router

// /api/cart/
router.get('/', async (req, res, next) => {
  if (req.session.passport) {
    try {
      const data = await Cart.findOrCreate({
        where: {userId: req.session.passport.user}
      })
      console.log('findOrCreate user cart')
      console.log('cart.id = ', data[0].id)
      res.json(data[0])
      //merge unlogged cart
    } catch (err) {
      next(err)
    }
  } else {
    try {
      const data = await Cart.findOrCreate({
        where: {sessionId: req.session.id}
      })
      console.log('findOrCreate non-user cart')
      console.log('cart.id = ', data[0].id)
      res.json(data[0])
    } catch (err) {
      next(err)
    }
  }
})

// /api/cart/:id
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

router.post('/:id', async (req, res, next) => {
  try {
    const cart = await CartItem.findOrCreate({
      where: req.body
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})
