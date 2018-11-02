/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Cart = db.model('cart')
const User = db.model('user')

describe('Cart model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('valid cart', () => {
    let cart
    let user

    beforeEach(async () => {
      cart = await Cart.create({})
      user = await User.create({
        email: 'cart@test.spec'
      })
    })

    it('returns true if the cart is created', () => {
      expect(cart.id).to.equal(1)
    })

    it('a user can have a cart', async () => {
      cart = await Cart.create({userId: user.id})
      expect(cart.userId).to.equal(1)
    })
  })
})
