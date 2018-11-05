/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return User.create({
        email: codysEmail
      })
    })

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(codysEmail)
    })
  }) // end describe('/api/users')

  describe('/api/users/:id', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return User.create({
        id: 1,
        email: codysEmail,
        isAdmin: false
      })
    })

    it('GET /api/users/:id', async () => {
      const res = await request(app)
        .get('/api/users/1')
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.id).to.be.equal(1)
    })

    it('PUT /api/users/:id', async () => {
      const res = await request(app)
        .put('/api/users/1')
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.isAdmin).to.be.equal(true)
    })

    it('DELETE /api/users/:id', async () => {
      const res = await request(app)
        .delete('/api/users/1')
        .expect(204)

      expect(res.body).to.be.deep.equal({})
    })
  }) // end describe('/api/users/:id')
}) // end describe('User routes')
