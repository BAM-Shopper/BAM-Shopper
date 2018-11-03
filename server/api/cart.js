const router = require('express').Router()
const {Cart, CartItem, Product} = require('../db/models')

module.exports = router

// /api/cart/
router.get('/', async (req, res, next) => {
  console.log('findOrCreate Cart')
  if (req.session.passport) {
    console.log('authenticated user')
    try {
      const data = await Cart.findOrCreate({
        where: {userId: req.session.passport.user}
      })
      res.json(data[0])
      //TODO merge unlogged cart
    } catch (err) {
      next(err)
    }
  } else {
    console.log('unauthenticated user')
    try {
      const data = await Cart.findOrCreate({
        where: {sessionId: req.session.id}
      })
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
      where: {productId: req.body.productId, cartId: req.params.id}
    }).then(obj => {
      if (obj) {
        // update
        return obj.update({
          quantity: Number(req.body.quantity) + obj.quantity
        })
      } else {
        // insert'
        return CartItem.create({
          quantity: req.body.quantity,
          productId: req.body.productId,
          cartId: req.params.id
        })
      }
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.put('/:id/:itemId', async (req, res, next) => {
  try {
    await CartItem.update(
      {
        cartId: req.body.cartId,
        productId: req.body.productId,
        quantity: req.body.quantity
      },
      {
        where: {
          id: req.params.itemId
        }
      }
    )
    const updated = await CartItem.findById(req.params.itemId)
    res.json(updated)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id/:itemId', async (req, res, next) => {
  try {
    await CartItem.destroy({
      where: {
        cartId: req.params.id,
        id: req.params.itemId
      }
    })
    res.status(200).send(req.params.itemId)
  } catch (err) {
    next(err)
  }
})
