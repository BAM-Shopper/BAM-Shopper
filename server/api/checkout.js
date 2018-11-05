//const passport = require('passport')
const router = require('express').Router()
module.exports = router

if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_PUBLISHABLE_KEY) {
  console.log('Stripe public / secret key not found. Cannot checkout.')
} else {
  console.log("valid stripe key's")

  var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  router.post('/', async (req, res, next) => {
    console.log('req.body in POST: ', req.body)
    try {
      const charge = await stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        description: 'Example $100 charge',
        source: 'tok_visa'
      })
      console.log('STRIPE RESPONSE: ', charge)
      res.json(charge)
    } catch (err) {
      next(err)
    }
  })
}
