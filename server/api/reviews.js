const router = require('express').Router()
const {Review, Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Review.findAll({
      include: [
        {
          model: Product,
            attributes: ['id', 'title'],
        }
      ]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
      const newReview = await Review.create(req.body)
      res.status(201).json(newReview)
  } catch (err) {
      next(err)
  }
})
