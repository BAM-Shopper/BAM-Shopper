//const passport = require('passport')
const router = require('express').Router()
module.exports = router

if (!process.env.STRIPE_SECRET_KEY) {
  console.log('Stripe secret key not found. Cannot checkout.')
} else {
  var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  router.post('/', async (req, res, next) => {
    try {
      const charge = await stripe.charges.create({
        amount: req.body.price,
        currency: 'usd',
        description: 'Test $1 Charge',
        source: req.body.token.id
      })
      res.json(charge)
    } catch (err) {
      next(err)
    }
  })
}
