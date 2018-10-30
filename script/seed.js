'use strict'

const db = require('../server/db')
const {User, Product, Order, OrderItem} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const movies =  await Promise.all([
    Product.create({title: 'Die Hard', description: 'Bruce Willis was wild in this one!', price: 50.00}),
    Product.create({title: 'Halloweentown', description: 'Big ole pumpkin', price: 9.99}),
    Product.create({title: 'Lilo and Stitch', description: 'Loveable alien on the beach', price: 10.00})
  ])

  const orders = await Promise.all([
    Order.create({userId: 1, total: 100.00}),
  ])

  const orderItems = await Promise.all([
    OrderItem.create({orderId: 1, quantity: 1, price: 50.00}),
    OrderItem.create({quantity: 20, price: 199.80})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${movies.length} movies`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${orderItems.length} orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
