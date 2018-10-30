const { expect } = require('chai')
const db = require('../index')
const User = db.model('user')
const Order = db.model('order')

describe('Order model', () => {
    beforeEach(() => {
        return db.sync({ force: true })
    })

    describe('valid order', () => {
        let myOrder

        beforeEach(async () => {
            let user = await User.create({
                email: 'dan@yahoo.com',
                password: '33333'
            })
            myOrder = await Order.create({
                total: 50.00,
            })
            myOrder.setUser(user)
        })

        it('is linked to the correct user', async () => {
            const foundUser = await User.findById(myOrder.userId)
            expect(foundUser.email).to.equal('dan@yahoo.com')
        })
    })
}) // end describe('Order model')