const { expect } = require('chai')
const db = require('../../index')
const Product = db.model('product')

describe('Product model', () => {
    beforeEach(() => {
      return db.sync({ force: true })
    })
  
    describe('valid product', () => {
      let movie
  
      beforeEach(async () => {
        movie = await Product.create({
          title: 'Mean Girls',
          description: 'Mean Girls...the movie',
          price: 10.00
        })
      })
  
      it('sets default inventory as 0', () => {
        expect(movie.inventory).to.equal(0)
      })
  
      it('sets default imageUrl to Die Hard 2', async () => {
        try {
          await movie.validate()
          throw Error('validation should have failed with invalid email')
        }
        catch (err) {
          expect(err.message).to.contain('validation should have failed with invalid email')
        }
      })
    })
  }) // end describe('Product model')
  