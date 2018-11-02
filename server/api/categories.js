const router = require('express').Router()
const { Category } = require('../db/models')
module.exports = router

// GET /api/categories/
router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll()
    res.json(categories)
  } catch (err) {
    next(err)
  }
})

// POST /api/categories/
router.post('/', async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body)
    res.status(201).json(newCategory)
  } catch (err) {
    next(err)
  }
})
