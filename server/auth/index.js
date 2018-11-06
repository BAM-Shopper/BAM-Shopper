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
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
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
  console.log('GOT POST REQUEST')
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex')
        done(err, token)
      })
    },
    function(token, done) {
      User.findOne(
        {where: {
          email: req.body.email}
        },
        function (err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.')
          return res.redirect('/forgot')
        }

        user.resetPasswordToken = token
        user.resetPasswordExpires = Date.now() + 3600000

        user.save(function(err) {
          done(err, token, user)
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'noreply.blockblaster@gmail.com',
          pass: process.env.GMAILPW
        }
      })
      var mailOptions = {
        to: user.email,
        from: 'noreply.blockblaster@gmail.com',
        subject: "BlockBlaster Password Reset",
        text: `You are receiving this because you (or someone else) requested the reset of your BlockBlaster password.  Please click on the following link, or paste this into your browser to complete the process.  http://${req.headers.host}/reset/${token}\n\n  If you did not request this, please ignore this email and your password will remain unchanged.`
      }
      smtpTransport.sendMail(mailOptions, function(err) {
        console.log('mail sent')
        req.flash('success', `An email has been sent to ${user.email} with further instructions`)
        done(err, 'done')
      })
    },
  ], function(err) {
    if (err) return next(err)
    res.redirect('/forgot')
  }
  )
})



router.use('/google', require('./google'))
