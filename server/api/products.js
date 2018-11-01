const router = require('express').Router()
const { Product, Review, User, Category } = require('../db/models')

module.exports = router

// /api/products/
router.get('/', async (req, res, next) => {
    try {
      const products = await Product.findAll({
        include: [
          {
            model: Category,
            attributes: ['name']
          }
        ]
      })
      res.json(products)
    } catch (err) {
      next(err)
    }
})

// /api/products/:id
router.get('/:id', async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id, {
            include: [{
                model: Review,
                include: [{
                    model: User
                }]
            }]
        })
        res.json(product)
    } catch (err) {
        next(err)
    }
})

// /api/products/
router.post('/', async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)
    } catch (err) {
        next(err)
    }
})
