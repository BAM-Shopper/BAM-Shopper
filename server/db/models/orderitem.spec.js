// const { expect } = require('chai')
// const db = require('../index')
// const OrderItem = db.model('order item')
// const User = db.model('user')

// describe('Order model', () => {
//     beforeEach(() => {
//       return db.sync({ force: true })
//     })
  
//     describe('valid email', () => {
//       let orderedThing
  
//       beforeEach(async () => {
//         orderedThing = await OrderItem.create({
//           Id: 1,
//           quantity: 15,
//           price: 10.00
//         })
//       })
  
//       it('is linked to the correct user', async () => {
//         const foundUser = await User.findById(orderedThing.userId)
//         expect(foundUser.email).to.equal('cody@email.com')
//       })
  
//       it('sets default imageUrl to Die Hard 2', async () => {
//         try {
//           await movie.validate()
//           throw Error('validation should have failed with invalid email')
//         }
//         catch (err) {
//           expect(err.message).to.contain('validation should have failed with invalid email')
//         }
//       })
//     })
//   }) // end describe('Product model')