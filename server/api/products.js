const router = require('express').Router()
const {Product, Category} = require('../db/models')
module.exports = router

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
