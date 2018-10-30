/* global describe beforeEach it */

const { expect } = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('valid email', () => {
    let cody

    beforeEach(async () => {
      cody = await User.create({
        email: 'cody@puppybook.com',
      })
    })

    it('returns true if the email is valid', () => {
      expect(cody.email).to.equal('cody@puppybook.com')
    })

    it('returns false if the email is invalid', async () => {
      try {
        await cody.validate()
        throw Error('validation should have failed with invalid email')
      }
      catch (err) {
        expect(err.message).to.contain('validation should have failed with invalid email')
      }
    })
  })
}) // end describe('User model')
