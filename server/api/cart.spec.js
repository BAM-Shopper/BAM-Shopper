const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Cart = db.model('cart')

describe('Cart routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/cart/', () => {
    beforeEach(() => {
      return Promise.all([Cart.create({}), Cart.create({})])
    })

    it('GET /api/carts', async () => {
      const res = await request(app)
        .get('/api/cart')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body.length).to.be.equal(2)
    })

    it('GET /api/carts/:id', async () => {
      const res = await request(app)
        .get('/api/cart/2')
        .expect(200)
      expect(res.body.id).to.be.equal(2)
    })
  }) // end describe('/api/cart')
}) // end describe('Cart routes')
