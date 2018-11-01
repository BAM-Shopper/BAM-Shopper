const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Cart = db.model('cart')

describe('Cart routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/carts/', () => {
    beforeEach(() => {
      return Promise.all([Cart.create({}), Cart.create({})])
    })

    it('GET /api/carts', async () => {
      const res = await request(app)
        .get('/api/carts')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body.length).to.be.equal(2)
    })

    it('GET /api/carts/:id', async () => {
      const res = await request(app)
        .get('/api/carts/2')
        .expect(200)
      expect(res.body.id).to.be.equal(2)
    })
  }) // end describe('/api/carts')
}) // end describe('Cart routes')
