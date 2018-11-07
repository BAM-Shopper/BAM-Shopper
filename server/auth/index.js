const router = require('express').Router()
const User = require('../db/models/user')
const passport = require('passport')
const async = require('async')
const nodemailer = require('nodemailer')
const crypto = require('crypto')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})

    //Hold prevSessionId for cart merging
    await user.update({prevSession: req.session.id})

    if (!user) {
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.post('/forgot', function(req, res, next) {
  async.waterfall(
    [
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          var token = buf.toString('hex')
          done(err, token)
        })
      },
      function(token, done) {
        User.findOne({
          where: {
            email: req.body.email
          }
        }).then(user => {
          if (!user) {
            console.log('No account with that email address exists.')
          } else {
            user.resetPasswordToken = token
            user.resetPasswordExpires = Date.now() + 3600000

            user
              .save(function(err) {
                done(err, token, user)
              })
              .then(user => {
                const userObj = user.dataValues
                let transporter = nodemailer.createTransport({
                  service: 'Gmail',
                  auth: {
                    user: 'noreply.blockblaster@gmail.com',
                    pass: process.env.GMAILPW
                  }
                })
                let mailOptions = {
                  to: userObj.email,
                  from: 'noreply.blockblaster@gmail.com',
                  subject: 'BlockBlaster Password Reset',
                  text: `You are receiving this because you (or someone else) requested the reset of your BlockBlaster password.  Please click on the following link, or paste this into your browser to complete the process.  http://${
                    req.headers.host
                  }/reset/${
                    userObj.resetPasswordToken
                  }\n\n  If you did not request this, please ignore this email and your password will remain unchanged.`
                }
                transporter.sendMail(mailOptions, function(err) {
                  console.log('Mail Sent')
                  // req.flash('success', `An email has been sent to ${userObj.email} with further instructions`)
                  done(err, 'done')
                })
              })
          }
        })
      }
    ],
    function(err) {
      if (err) return next(err)
      res.redirect('/forgot')
    }
  )
})

router.get('/reset/:token', function(req, res) {
  User.findOne({
    where: {
      resetPasswordToken: req.params.token,
      resetPasswordExpires: {
        $gt: Date.now()
      }
    }
  }).then(user => {
    if (!user) {
      console.log('Password reset token is invalid or has expired')
      // req.flash('error', 'Password reset token is invalid or has expired')
      return res.redirect('/forgot')
    } else {
      res.render('reset')
    }
  })
})

router.post('/receipt', function(req, res, next) {
  const name = []
  name.push(`${req.body.shippingDetails['shipping[first-name]']}`)
  name.push(`${req.body.shippingDetails['shipping[last-name]']}`)

  const shipping = []
  shipping.push('Shipping Address:')
  shipping.push('===========================================')
  shipping.push(`Address-1: ${req.body.shippingDetails['shipping[address-1]']}`)
  shipping.push(`Address-2: ${req.body.shippingDetails['shipping[address-2]']}`)
  shipping.push(`City: ${req.body.shippingDetails['shipping[city]']}`)
  shipping.push(`State: ${req.body.shippingDetails['shipping[state]']}`)
  shipping.push(`Country: ${req.body.shippingDetails['shipping[country]']}`)
  shipping.push(`Zip: ${req.body.shippingDetails['shipping[zip]']}`)

  const orderSummary = []
  orderSummary.push(`Order Summary:`)
  orderSummary.push(`Order #: ${req.body.order.id}`)
  orderSummary.push(`Order Status: ${req.body.order.status}`)
  orderSummary.push(`Order Timestamp: ${req.body.order.createdAt.slice(0, 10)}`)
  orderSummary.push('===========================================')
  req.body.items.forEach(item => {
    orderSummary.push(`Product: ${item.product.title}`)
    orderSummary.push(`Quantity: ${item.quantity}`)
    orderSummary.push(
      `Subtotal: $${(item.quantity * item.product.price).toFixed(2)}`
    )
    orderSummary.push('===========================================')
  })
  orderSummary.push(`\nTotal Cost: $${req.body.order.total}`)

  let email = `Hello ${name.join(
    ' '
  )},\n\nYour payment has been recieved!\n\n${shipping.join(
    '\n'
  )}\n\n${orderSummary.join(
    '\n'
  )}\n\nPlease contact us if you have questions or concerns about your order,\nThe BlockBlaster Team`

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'noreply.blockblaster@gmail.com',
      pass: process.env.GMAILPW
    }
  })
  let mailOptions = {
    to: req.body.shippingDetails['shipping[email]'],
    from: 'noreply.blockblaster@gmail.com',
    subject: 'BlockBlaster Order Receipt',
    text: email
  }
  transporter.sendMail(mailOptions, function(err) {
    console.log('mail sent')
    // req.flash('success', `An email has been sent to ${userObj.email} with further instructions`)
    next(err)
  })
})

router.use('/google', require('./google'))
