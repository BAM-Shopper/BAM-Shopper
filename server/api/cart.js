const router = require('express').Router()
const {Cart, CartItem, Product} = require('../db/models')

module.exports = router

// /api/cart/
router.get('/', async (req, res, next) => {
  if (req.session.passport) {
    try {
      const data = await Cart.findOrCreate({
        where: {userId: req.session.passport.user}
      })
      req.session.cartId = data[0].id
      res.json(data[0])
      //TODO merge unlogged cart
    } catch (err) {
      next(err)
    }
  } else {
    try {
      const data = await Cart.findOrCreate({
        where: {sessionId: req.session.id}
      })
      req.session.cartId = data[0].id
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
      include: [
        {
          model: CartItem,
          include: [Product]
        }
      ]
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.post('/:id', async (req, res, next) => {
  try {
    const cart = await CartItem.findOne({
      where: {productId: req.body.productId}
    }).then(obj => {
      if (obj) {
        // update
        return obj.update({
          quantity: Number(req.body.quantity) + obj.quantity
        })
      } else {
        // insert
        return CartItem.create({
          quantity: req.body.quantity,
          productId: req.body.productId,
          cartId: req.session.cartId
        })
      }
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.put('/:id/itemId', async (req, res, next) => {
  try {
    await CartItem.update(
      {
        cartId: req.body.cartId,
        productId: req.body.productId,
        quantity: req.body.quantity
      },
      {
        where: {
          cartId: req.params.id,
          id: req.params.itemId
        }
      }
    )
    const item = await CartItem.findById(req.params.itemId)
    res.json(item)
  } catch (err) {
    next(err)
  }
})
