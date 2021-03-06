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
      const oldCart = await Cart.findOne({
        where: {sessionId: req.user.prevSession}
      })
      if (oldCart) {
        await CartItem.update(
          {cartId: data[0].id},
          {where: {cartId: oldCart.id}}
        )
      }
      res.json(data[0])
    } catch (err) {
      next(err)
    }
  } else {
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
    let item
    await CartItem.findOne({
      where: {productId: req.body.productId, cartId: req.params.id}
    }).then(async obj => {
      if (obj) {
        // update
        item = await obj.update({
          quantity: Number(req.body.quantity) + obj.quantity
        })
      } else {
        // insert'
        item = await CartItem.create({
          quantity: req.body.quantity,
          productId: req.body.productId,
          cartId: req.params.id
        })
      }
    })

    const eagerLoaded = await CartItem.findById(item.id, {
      include: [Product]
    })

    res.json(eagerLoaded)
  } catch (err) {
    next(err)
  }
})

router.put('/:id/item/:itemId', async (req, res, next) => {
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
    const updated = await CartItem.findById(req.params.itemId, {
      include: [Product]
    })
    res.json(updated)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id/item/:itemId', async (req, res, next) => {
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
