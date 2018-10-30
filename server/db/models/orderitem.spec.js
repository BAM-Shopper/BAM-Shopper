const { expect } = require('chai')
const db = require('../index')
const OrderItem = db.model('order item')
const Order = db.model('order')

describe('Order Item model', () => {
    beforeEach(() => {
        return db.sync({ force: true })
    })

    describe('valid order item', () => {
        let order
        let orderItem1
        let orderItem2

        beforeEach(async () => {
            order = await Order.create({total: 59.95 })

            orderItem1 = await OrderItem.create({quantity: 1, price: 10.00 })
            orderItem2 = await OrderItem.create({quantity: 5, price: 49.95 })
            orderItem1.setOrder(order)
            orderItem2.setOrder(order)
        })

        it('is linked to the correct order', () => {
            expect(orderItem1.orderId).to.equal(order.id)
        })

    })
})  //end describe('Order Item model')