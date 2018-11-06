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

const moviesMaster = require('./movies')
const movies = JSON.parse(JSON.stringify(moviesMaster))

console.log(`loading ${movies.length} movies from movies.js`)

const categoriesMaster = []
movies.forEach(movie => {
  movie.genre.forEach(genre => {
    let trim = genre.trim()
    if (categoriesMaster.indexOf(trim) === -1 && trim.length > 0) {
      categoriesMaster.push(trim)
    }
  })
})

console.log(`loading ${categoriesMaster.length} categories from movies.js`)

const numUsers = 20
const numProducts = movies.length
const numCategories = categoriesMaster.length
const numOrders = 60
const numOrderItems = 200
const numReviews = 300
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
  return User.build({
    email: emails.pop(),
    password: chance.word({length: 6}) + chance.character({pool: '12345'}),
    isAdmin: chance.weighted([true, false], [1, 10])
  })
}

function generateUsers() {
  const users = doTimes(numUsers, randUser)
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
  let movie = movies.pop()
  return Product.build({
    title: movie.title,
    description: movie.description,
    imageUrl: movie.imageUrl,
    price: chance.floating({min: 5, max: 20, fixed: 2}),
    inventory: chance.integer({min: 0, max: 50}),
    isAvailible: chance.weighted([true, false], [1, 20])
  })
}

function generateProducts() {
  const products = doTimes(numProducts, randProduct)
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
    name: categoriesMaster.pop()
  })
}

function generateCategories() {
  const categories = doTimes(numCategories, randCategory)
  categories.push(
    Category.build({
      name: 'All'
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
    total: 0,
    userId: chance.integer({min: 1, max: numUsers}),
    status: chance.weighted(
      ['created', 'processing', 'cancelled', 'completed'],
      [1, 2, 3, 4]
    )
  })
}

function generateOrders() {
  const orders = doTimes(numOrders, randOrder)
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
  try {
    const all = await Category.findOne({
      where: {
        name: 'All'
      }
    })

    let count = 0

    for (let i = 0; i < moviesMaster.length; i++) {
      let product = await Product.findOne({
        where: {title: moviesMaster[i].title}
      })
      for (let j = 0; j < moviesMaster[i].genre.length; j++) {
        let trim = moviesMaster[i].genre[j].trim()
        let category = await Category.findOne({where: {name: trim}})
        await product.addCategory(category)
        count++
      }
      await product.addCategory(all)
      count++
    }
    console.log(`seeding ${count} productTags`)
  } catch (err) {
    console.log(err)
  }
}

// computes the order prices based on order items
async function updateOrders() {
  try {
    for (let i = 1; i <= numOrders; i++) {
      let order = await Order.findById(i, {
        include: [OrderItem]
      })
      await order.update({
        total: Number(
          order['order items']
            .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
            .toFixed(2)
        )
      })
    }
    console.log(`updating ${numOrders} orders`)
  } catch (err) {
    console.log(err)
  }
}

// data that will be used for domo purposes
async function seedDemoData() {
  try {
    await User.create({
      email: 'admin@demo.demo',
      password: '123',
      isAdmin: true
    })

    const user = await User.create({
      email: 'demo@demo.demo',
      password: '123',
      isAdmin: false
    })

    const product1 = await Product.create({
      title: 'Die Hard',
      description:
        "New York City policeman John McClane (Bruce Willis) is visiting his estranged wife (Bonnie Bedelia) and two daughters on Christmas Eve. He joins her at a holiday party in the headquarters of the Japanese-owned business she works for. But the festivities are interrupted by a group of terrorists who take over the exclusive high-rise, and everyone in it. Very soon McClane realizes that there's no one to save the hostages -- but him.",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Die_hard.jpg',
      price: 9.99,
      inventory: 40,
      isAvailible: true
    })

    const product2 = await Product.create({
      title: 'Die Hard 2: Die Harder',
      description:
        'A year after his heroics in L.A, detective John McClane (Bruce Willis) is mixed up in another terrorist plot, this time at Washington Dulles International Airport, where he is waiting for his wife (Bonnie Bedelia). That same night, South American politico and drug profiteer Ramon Esperanza (Franco Nero) is arriving in U.S. custody. McClane takes action when a treasonous ex-colonel (William Sadler) seizes control of the airport, threatening to crash every inbound flight unless Esperanza is freed.',
      imageUrl: 'https://bit.ly/2CQDGUt',
      price: 14.99,
      inventory: 40,
      isAvailible: true
    })

    const product3 = await Product.create({
      title: 'Die Hard with a Vengeance',
      description:
        "Detective John McClane (Bruce Willis) is now divorced, alcoholic and jobless after getting fired for his reckless behavior and bad attitude. He is called back into action, however, when a cryptic terrorist (Jeremy Irons) takes New York City hostage in a lethal game of 'Simon Says' and refuses to speak with anyone but McClane. Teaming up with a street-savvy electrician named Zeus Carver (Samuel L. Jackson), McClane dashes through the city, trying to stay one step ahead of a murderous plot.",
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/4/4c/Die_Hard_With_A_Vengance.jpg',
      price: 19.99,
      inventory: 40,
      isAvailible: true
    })

    const product4 = await Product.create({
      title: 'Live Free or Die Hard',
      description:
        "As the nation prepares to celebrate Independence Day, veteran cop John McClane (Bruce Willis) carries out another routine assignment: bringing in a computer hacker (Justin Long) for questioning. Meanwhile, a tech-savvy villain named Thomas Gabriel (Timothy Olyphant) launches an attack on America's computer infrastructure. As chaos descends around him, McClane must use old-fashioned methods to fight the high-tech threat.",
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/4/46/Live_Free_or_Die_Hard.jpg',
      price: 19.99,
      inventory: 40,
      isAvailible: true
    })

    const order1 = await Order.create({
      total: product1.price + product2.price,
      userId: user.id,
      status: 'completed'
    })

    const order2 = await Order.create({
      total: product3.price,
      userId: user.id,
      status: 'processing'
    })

    await OrderItem.create({
      price: product1.price,
      quantity: 1,
      orderId: order1.id,
      productId: product1.id
    })

    await OrderItem.create({
      price: product2.price,
      quantity: 1,
      orderId: order1.id,
      productId: product2.id
    })

    await OrderItem.create({
      price: product3.price,
      quantity: 1,
      orderId: order2.id,
      productId: product3.id
    })

    await Review.create({
      text:
        "Die Hard is film's equivalent of a terrorist attack on your senses, but Willis' intensity and presence push it into guilty pleasure territory.",
      rating: 3,
      userId: 1,
      productId: product1.id
    })

    await Review.create({
      text:
        "McTiernan, who directed last summer's Predator, composes the action cleanly and logically, making good use of Jackson DeGovia's elaborate post-modernist set-the building becomes something of a character in itself.",
      rating: 5,
      userId: user.id,
      productId: product1.id
    })

    await Review.create({
      text:
        "In the first half of Director John McTiernan's movie, Willis wears an undershirt. In the second half he gets rid of it. And that's pretty much it for his performance.",
      rating: 1,
      userId: 1,
      productId: product1.id
    })

    await Review.create({
      text:
        'Die Hard 2 still feels as fresh and thrilling as the first time it screened!',
      rating: 1,
      userId: user.id,
      productId: product2.id
    })

    await Cart.create({
      userId: user.id
    })

    // populates the Tag Join table
    const all = await Category.findOne({
      where: {
        name: 'All'
      }
    })

    const action = await Category.findOne({
      where: {
        name: 'Action'
      }
    })

    const crime = await Category.findOne({
      where: {
        name: 'Crime'
      }
    })

    const comedy = await Category.findOne({
      where: {
        name: 'Comedy'
      }
    })

    await Promise.all([
      product1.addCategory(all),
      product1.addCategory(action),
      product1.addCategory(crime),
      product1.addCategory(comedy),
      product2.addCategory(all),
      product2.addCategory(action),
      product2.addCategory(crime),
      product2.addCategory(comedy),
      product3.addCategory(all),
      product3.addCategory(action),
      product3.addCategory(crime),
      product3.addCategory(comedy),
      product4.addCategory(all),
      product4.addCategory(action),
      product4.addCategory(crime),
      product4.addCategory(comedy)
    ])
  } catch (err) {
    console.log(err)
  }
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

    await updateOrders()
    console.log(`Successfully Updated Order Prices`)

    await seedDemoData()
    console.log(`Successfully Seeded Demo Data`)

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
