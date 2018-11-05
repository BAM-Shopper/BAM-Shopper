const router = require('express').Router()
const { Product, Review, User, Category } = require('../db/models')

module.exports = router

// GET /api/products/
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

// GET /api/products/:id
router.get('/:id', async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id, {
            include: [{
                model: Review,
                include: [{
                    model: User
                }]
            }, {
                model: Category,
                attributes: ['name']
            }]
        })
        res.json(product)
    } catch (err) {
        next(err)
    }
})

// POST /api/products/
router.post('/', async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)
    } catch (err) {
        next(err)
    }
})

// PUT /api/products/:id
router.put('/:id', async (req, res, next) => {
    try {
        let productToUpdate = await Product.findById(req.params.id)
        productToUpdate = await productToUpdate.update(req.body)
        res.json(productToUpdate)

       /*  if (req.body.category) {
            let categoryToAdd = await Category.findById(category)
            })
            const categoryAdd = await productToUpdate.addCategory(req.body.category)

        } */
    } catch (err) {
        next(err)
    }
})