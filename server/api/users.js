const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

// GET /api/users/
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email', 'isAdmin']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET /api/users/:id
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id, {
      attributes: ['id', 'email', 'isAdmin']
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// PUT /api/users/:id
router.put('/:id', async (req, res, next) => {
  try {
    let userToPromote = await User.findById(req.params.id)
    userToPromote.isAdmin = true
    res.json(userToPromote)
  } catch (err) {
    next(err)
  }
})

//DELETE /api/users/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    await User.destroy({where: {id}})
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})
