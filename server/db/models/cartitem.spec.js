/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const CartItem = db.model('cart item')
const Cart = db.model('cart')
const Product = db.model('product')

describe('CartItem model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('valid cart item', () => {
    let item
    let item2
    let product
    let cart

    beforeEach(async () => {
      item = await CartItem.create({
        quantity: 1
      })

      item2 = await CartItem.create({
        quantity: 1
      })

      cart = await Cart.create({})

      product = await Product.create({
        title: 'Die Harder',
        description: 'Die Hard Two, the best one',
        price: 1.0,
        inventory: 50,
        imageUrl: 'https://bit.ly/2CQDGUt'
      })
    })

    it('returns true if the cart is created', () => {
      expect(item.id).to.equal(1)
    })

    it('a cart can have a cartItem', async () => {
      item = await CartItem.create({
        quantity: 1,
        cartId: 1
      })
      expect(item.cartId).to.equal(1)
    })

    it("a cart can have a many cartItem's", async () => {
      item = await CartItem.create({
        quantity: 1,
        cartId: 1
      })

      item2 = await CartItem.create({
        quantity: 1,
        cartId: 1
      })

      const data = await CartItem.findAll({where: {cartId: 1}})

      expect(data.length).to.equal(2)
    })

    it('a product can have a cartItem', async () => {
      item = await CartItem.create({
        quantity: 1,
        productId: 1
      })
      expect(item.productId).to.equal(1)
    })

    it("a product can have a many cartItem's", async () => {
      item = await CartItem.create({
        quantity: 1,
        productId: 1
      })

      item2 = await CartItem.create({
        quantity: 1,
        productId: 1
      })

      const data = await CartItem.findAll({where: {productId: 1}})

      expect(data.length).to.equal(2)
    })
  })
})
