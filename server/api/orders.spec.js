/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Order = db.model('order')

describe('Order routes', () => {
    beforeEach(() => {
        return db.sync({ force: true })
    })

    describe('/api/orders/', () => {

        beforeEach(() => {
            return Order.create({
                total: 50.45,
                status: 'processing'
            })
        })

        it('GET /api/orders', async () => {
            const res = await request(app)
                .get('/api/orders')
                .expect(200)

            expect(res.body).to.be.an('array')
            expect(res.body[0].total).to.be.equal(50.45)
        })
    }) // end describe('/api/orders')

    describe('/api/orders/:id', () => {

        beforeEach(() => {
            return Order.create({
                id: 1,
                total: 50.45,
                status: 'processing'
            })
        })

        it('GET /api/orders/:id', async () => {
            const res = await request(app)
                .get('/api/orders/1')
                .expect(200)

            expect(res.body).to.be.an('object')
            expect(res.body.id).to.be.equal(1)
        })

        it('PUT /api/users/:id', async () => {
            const res = await request(app)
                .put('/api/orders/1')
                .expect(200)

            expect(res.body).to.be.an('object')
            expect(res.body.status).to.be.equal('processing')
        })
    }) // end describe('/api/users/:id')
}) // end describe('User routes')
