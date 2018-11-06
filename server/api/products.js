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
            include: [
                {
                    model: Review,
                    include: [
                        {
                            model: User
                        }
                    ]
                },
                {
                    model: Category,
                    attributes: ['name']
                }
            ]
        })
        res.json(product)
    } catch (err) {
        next(err)
    }
})

// POST /api/products/
router.post('/', async (req, res, next) => {
    try {
        let newProduct = await Product.create(req.body)
        const all = await Category.findOne({
            where: {
                name: 'all'
            }
        })
        await newProduct.addCategory(all)
        newProduct = await Product.findById(newProduct.id, {
            include: [
                {
                    model: Category,
                    attributes: ['name']
                }
            ]
        })
        res.status(201).json(newProduct)
    } catch (err) {
        next(err)
    }
})

// PUT /api/products/:id
router.put('/:id', async (req, res, next) => {
    try {
        let productToUpdate = await Product.findById(req.params.id)

        if (req.body.categoriesToAdd.length !== 0) {
            const catArr = req.body.categoriesToAdd
            let res = []

            for (let i = 0; i < catArr.length; i++) {
                const name = catArr[i]

                const a = await Category.findOne({
                    where: {
                        name: name
                    }
                })
                res.push(a)
            }

            res.forEach(cat => {
                productToUpdate.addCategory(cat)
            })
        }

        productToUpdate = await productToUpdate.update(req.body.product)
        productToUpdate = await Product.findById(req.params.id, {
            include: [
                {
                    model: Category,
                    attributes: ['name']
                }
            ]
        })
        res.json(productToUpdate)

    } catch (err) {
        next(err)
    }
})
