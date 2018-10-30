const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
    beforeEach(() => {
        return db.sync({ force: true })
    })

    describe('/api/products/', () => {
        beforeEach(() => {

            return Promise.all([
                Product.create({
                    title: 'Gigli',
                    description: 'Ugh...',
                    price: 0.99
                }),
                Product.create({
                    title: 'Halloweentown',
                    description: 'Big ole pumpkin',
                    price: 9.99
                })
            ])
        })

        it('GET /api/products', async () => {
            const res = await request(app)
                .get('/api/products')
                .expect(200)

            expect(res.body).to.be.an('array')
            expect(res.body.length).to.be.equal(2)
            expect(res.body[0].title).to.be.equal('Gigli')
        })

        it('GET /api/products/:id', async () => {
            const res = await request(app)
                .get('/api/products/2')
                .expect(200)
            expect(res.body.title).to.be.equal('Halloweentown')
            expect(res.body.id).to.be.equal(2)
        })
    }) // end describe('/api/products')
}) // end describe('Product routes')
