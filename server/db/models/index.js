const User = require('./user')
const Category = require('./category')
const Product = require('./product')
const Order = require('./order')
const OrderItem = require('./orderitem')
const Review = require('./review')
const Cart = require('./cart')
const CartItem = require('./cartitem')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.hasMany(Order)

Order.belongsTo(User)
Order.hasMany(OrderItem)

OrderItem.belongsTo(Order)
OrderItem.belongsTo(Product)

Category.belongsToMany(Product, {through: 'tag'})
Product.belongsToMany(Category, {through: 'tag'})

Review.belongsTo(Product)
Product.hasMany(Review)
Review.belongsTo(User)

Cart.belongsTo(User)
User.hasOne(Cart)

CartItem.belongsTo(Cart)
Cart.hasMany(CartItem)

CartItem.belongsTo(Product)
Product.hasMany(CartItem)

/*
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Order,
  OrderItem,
  Category,
  Review,
  Cart,
  CartItem
}
