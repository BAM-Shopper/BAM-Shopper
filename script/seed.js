'use strict'

const db = require('../server/db')
const {
  User,
  Product,
  Order,
  OrderItem,
  Category,
  Review,
  Cart,
  CartItem
} = require('../server/db/models')

// Random Data Creators
const chance = require('chance')(123)
const Promise = require('bluebird')

const movies = require('./movies')
console.log(`loading ${movies.length} movies from movies.js`)

const numUsers = 20
const numProducts = movies.length
const numCategories = 5
const numOrders = 40
const numOrderItems = 100
const numReviews = 100
const numCarts = 20
const numCartItems = 50

const emails = chance.unique(chance.email, numUsers)
let userIds = numUsers

//helper functions
function doTimes(n, fn) {
  const results = []
  while (n--) {
    results.push(fn())
  }
  return results
}

//Users
function randUser() {
  //const gender = chance.gender()
  return User.build({
    // firstName: chance.first({ gender: gender }),
    // lastName: chance.last(),
    // imageUrl: randPhoto(gender),
    email: emails.pop(),
    password: chance.word({length: 6}) + chance.character({pool: '12345'}),
    isAdmin: chance.weighted([true, false], [1, 10])
  })
}

function generateUsers() {
  const users = doTimes(numUsers, randUser)
  users.push(
    User.build({
      /* firstName: 'Test',
      lastName: 'Test', */
      email: 'test@test.test',
      password: '123',
      isAdmin: true
    })
  )
  console.log(`seeding ${users.length} users`)
  return users
}

function createUsers() {
  return Promise.map(generateUsers(), user => {
    return user.save()
  })
}

//Products
function randProduct() {
  return Product.build({
    ...movies.pop(),
    price: chance.floating({min: 1, max: 100, fixed: 2}),
    inventory: chance.integer({min: 0, max: 200})
  })
}

function generateProducts() {
  const products = doTimes(numProducts, randProduct)
  products.push(
    Product.build({
      title: 'TEST',
      description: chance.paragraph(),
      price: 1,
      inventory: 999
    })
  )
  console.log(`seeding ${products.length} products`)
  return products
}

function createProducts() {
  return Promise.map(generateProducts(), product => {
    return product.save()
  })
}

//Categories
function randCategory() {
  return Category.build({
    name: chance.word()
  })
}

function generateCategories() {
  const categories = doTimes(numCategories, randCategory)
  categories.push(
    Category.build({
      name: 'all'
    })
  )
  console.log(`seeding ${categories.length} categories`)
  return categories
}

function createCategories() {
  return Promise.map(generateCategories(), category => {
    return category.save()
  })
}

//Orders
function randOrder() {
  return Order.build({
    total: chance.floating({min: 20, max: 200, fixed: 2}),
    userId: chance.integer({min: 1, max: numUsers}),
    status: chance.weighted(
      ['created', 'processing', 'cancelled', 'completed'],
      [1, 2, 3, 4]
    )
  })
}

function generateOrders() {
  const orders = doTimes(numOrders, randOrder)
  orders.push(
    Order.build({
      total: 999,
      userId: 1
    })
  )
  console.log(`seeding ${orders.length} orders`)
  return orders
}

function createOrders() {
  return Promise.map(generateOrders(), order => {
    return order.save()
  })
}

//OrderItems
function randOrderItem() {
  return OrderItem.build({
    price: chance.floating({min: 1, max: 100, fixed: 2}),
    quantity: chance.integer({min: 1, max: 10}),
    orderId: chance.integer({min: 1, max: numOrders}),
    productId: chance.integer({min: 1, max: numProducts})
  })
}

function generateOrderItems() {
  const orderItems = doTimes(numOrderItems, randOrderItem)
  orderItems.push(
    OrderItem.build({
      price: 999,
      quantity: 999,
      orderId: 1,
      productId: 1
    })
  )
  console.log(`seeding ${orderItems.length} orderItems`)
  return orderItems
}

function createOrderItems() {
  return Promise.map(generateOrderItems(), orderItem => {
    return orderItem.save()
  })
}

//Reviews
function randReview() {
  return Review.build({
    text: chance.paragraph(),
    rating: chance.integer({min: 1, max: 5}),
    userId: chance.integer({min: 1, max: numUsers}),
    productId: chance.integer({min: 1, max: numProducts})
  })
}

function generateReviews() {
  const reviews = doTimes(numReviews, randReview)
  reviews.push(
    Review.build({
      text: chance.paragraph(),
      rating: chance.integer({min: 1, max: 5}),
      userId: chance.integer({min: 1, max: numUsers}),
      productId: chance.integer({min: 1, max: numProducts})
    })
  )
  console.log(`seeding ${reviews.length} reviews`)
  return reviews
}

function createReviews() {
  return Promise.map(generateReviews(), review => {
    return review.save()
  })
}

//Carts
function randCart() {
  return Cart.build({
    userId: userIds--
  })
}

function generateCarts() {
  const carts = doTimes(numCarts, randCart)
  carts.push(
    Cart.build({
      userId: numUsers + 1
    })
  )
  console.log(`seeding ${carts.length} carts`)
  return carts
}

function createCarts() {
  return Promise.map(generateCarts(), cart => {
    return cart.save()
  })
}

//CartItems
function randCartItem() {
  return CartItem.build({
    quantity: chance.integer({min: 1, max: 10}),
    productId: chance.integer({min: 1, max: numProducts}),
    cartId: chance.integer({min: 1, max: numCarts})
  })
}

function generateCartItems() {
  const cartItems = doTimes(numCartItems, randCartItem)
  cartItems.push(
    CartItem.build({
      quantity: 999,
      productId: 1,
      cartId: numCarts + 1
    })
  )
  console.log(`seeding ${cartItems.length} cartItems`)
  return cartItems
}

function createCartItems() {
  return Promise.map(generateCartItems(), cartItem => {
    return cartItem.save()
  })
}

// populates the Tag Join table
async function createTags() {
  const products = await Product.findAll()
  const categories = await Category.findAll()
  const all = await Category.findOne({
    where: {
      name: 'all'
    }
  })

  for (let i = 0; i < numProducts; i++) {
    let tags = chance.unique(chance.integer, 3, {
      min: 0,
      max: numCategories - 1
    })

    await products[i].addCategory(categories[tags[0]])
    await products[i].addCategory(categories[tags[1]])
    await products[i].addCategory(all)
  }
  console.log(`seeding ${numProducts * 3} productTags`)
}

const seed = async () => {
  try {
    await db.sync({force: true})
    console.log('db synced!')

    await createUsers()
    console.log(`Successfully Seeded Users`)

    await createCategories()
    console.log(`Successfully Seeded Categories`)

    await createProducts()
    console.log(`Successfully Seeded Products`)

    await createOrders()
    console.log(`Successfully Seeded Orders`)

    await createOrderItems()
    console.log(`Successfully Seeded OrderItems`)

    await createReviews()
    console.log(`Successfully Seeded Reviews`)

    await createCarts()
    console.log(`Successfully Seeded Carts`)

    await createCartItems()
    console.log(`Successfully Seeded CartItems`)

    await createTags()
    console.log(`Successfully Seeded Tag Join Table`)

    console.log(`seeding successfully`)
  } catch (err) {
    console.log('Error while seeding')
    console.log(err.stack)
  }
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
