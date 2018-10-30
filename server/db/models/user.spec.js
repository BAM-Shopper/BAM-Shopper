/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('valid email', () => {
    let cody

    beforeEach(async () => {
      cody = await User.create({
        email: 'cody@puppybook.com'
      })
    })

    it('returns true if the email is valid', () => {
      expect(cody.email).to.equal('cody@puppybook.com')
    })

    it('returns false if the email is invalid', async () => {
      try {
        await User.create({
          email: 'cody$puppybook.com'
        })
      } catch (err) {
        expect(err.message).to.contain('Validation isEmail on email failed')
      }
    })
  })
}) // end describe('User model')
