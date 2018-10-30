'use strict'

const db = require('../server/db')
const {
  User,
  Product,
  Order,
  OrderItem,
  Category,
  Review
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const categories = await Promise.all([
    Category.create({name: 'action'}),
    Category.create({name: 'disney'}),
    Category.create({name: 'DVD'}),
    Category.create({name: 'VHS'})
  ])

  const movies = await Promise.all([
    Product.create({
      title: 'Die Hard',
      description: 'Bruce Willis was wild in this one!',
      price: 50.0
    }),
    Product.create({
      title: 'Halloweentown',
      description: 'Big ole pumpkin',
      price: 9.99
    }),
    Product.create({
      title: 'Lilo and Stitch',
      description: 'Loveable alien on the beach',
      price: 10.0
    })
  ])

  movies[0].addCategory(categories[0])
  movies[0].addCategory(categories[2])
  movies[1].addCategory(categories[1])
  movies[1].addCategory(categories[2])
  movies[2].addCategory(categories[1])
  movies[2].addCategory(categories[3])

  const orders = await Promise.all([Order.create({userId: 1, total: 59.95})])

  const orderItems = await Promise.all([
    OrderItem.create({orderId: 1, productId: 3, quantity: 1, price: 10.0}),
    OrderItem.create({orderId: 1, productId: 2, quantity: 5, price: 49.95})
  ])

  const reviews = await Promise.all([
    Review.create({
      text:
        "My son's class required headphones this year for computer lab. He hates wearing anything on his head or ears. These are pretty light but sturdy and comfortable on the ears. They stay put and block outside noise. I tried them and I think I'm going to buy some for myself. I'm very impressed with the price and quality.",
      rating: 5
    }),
    Review.create({
      text:
        'I purchased these headphones for my 4 year old grandson. He has had a couple other headphones over the last couple years and they felt flimsy and he refused to wear them. We had an airline flight coming up and thought these would work for him to watch a movie. He left them on the entire time he watched the movie and adjusted easily to fit his head and ears. Only reason for a 4 star instead of 5 star is due to being bulky for travel, however, earbuds would never have worked so I was prepared for bulky.',
      rating: 4
    }),
    Review.create({
      text:
        'I bought these headphones for my son to use at school. By the end of his first day using them, the speaker stopped working in one of the ears! I returned them and got my account credited, but it was a huge disappointment and forced my son to go without sound on his iPad for school while I ordered another pair from another company.',
      rating: 3
    }),
    Review.create({
      text:
        'Perfect for school! We were looking for a pair of headphones for our seven-year-old daughter‘s second grade class! These sound fantastic, they are in stereo, they are very comfortable and the cord is perfect because it won’t get frayed and spliced like the cheap other ones we had!',
      rating: 2
    }),
    Review.create({
      text:
        "I've had them for a few weeks. Went pull them out of my kids iPad and the connector broke. C'mon. Just a few weeks. They were definitely not maltreated or rough-housed with. The metal portion got stuck in the headphone jack. Really annoying to have headphones advertised for kids and they're not made to last. Garbage. Don't buy these.",
      rating: 1
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${categories.length} categories`)
  console.log(`seeded ${movies.length} movies`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${orderItems.length} orders`)
  console.log(`seeded ${reviews.length} reviews`)
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
