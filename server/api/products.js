const router = require('express').Router()
const { Product, Review, User } = require('../db/models')

module.exports = router

// /api/products/
router.get('/', async (req, res, next) => {
    try {
        const products = await Product.findAll()
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
