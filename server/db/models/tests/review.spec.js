/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../../index')
const Review = db.model('review')

describe('Review model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('valid review', () => {
    let goodReview

    let text =
      "I've had them for a few weeks. Went pull them out of my kids iPad and the connector broke. C'mon. Just a few weeks. They were definitely not maltreated or rough-housed with. The metal portion got stuck in the headphone jack. Really annoying to have headphones advertised for kids and they're not made to last. Garbage. Don't buy these."

    beforeEach(async () => {
      goodReview = await Review.create({
        text: text,
        rating: 4
      })
    })

    it('returns true if the text and rating are valid', () => {
      expect(goodReview.text).to.contain("I've had them for a few weeks")
      expect(goodReview.rating).to.equal(4)
    })

    it('returns false if the text is an empty string', async () => {
      try {
        await Review.create({
          text: '',
          rating: 3
        })
      } catch (err) {
        expect(err.message).to.contain('Validation notEmpty on text failed')
      }
    })

    it('returns false if the text is NULL', async () => {
      try {
        await Review.create({
          rating: 3
        })
      } catch (err) {
        expect(err.message).to.contain('notNull Violation')
      }
    })

    it('returns false if the text is not at least 120 characters', async () => {
      try {
        await Review.create({
          text: 'I LOVE IT',
          rating: 5
        })
      } catch (err) {
        expect(err.message).to.contain('Validation len on text failed')
      }
    })

    it('rating is between 1 and 5', async () => {
      try {
        await Review.create({
          text: text,
          rating: 10
        })
      } catch (err) {
        expect(err.message).to.contain('Validation max on rating failed')
      }

      try {
        await Review.create({
          text: text,
          rating: 0
        })
      } catch (err) {
        expect(err.message).to.contain('Validation min on rating failed')
      }
    })
  })
}) // end describe('Review model')
