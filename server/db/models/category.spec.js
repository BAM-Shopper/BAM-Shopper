/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Category = db.model('category')
const Product = db.model('product')

describe('Category model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('valid name', () => {
    let drama
    let action
    let movie
    let movie2

    beforeEach(async () => {
      drama = await Category.create({
        name: 'drama'
      })

      action = await Category.create({
        name: 'action'
      })

      movie = await Product.create({
        title: 'Mean Girls',
        description: 'Mean Girls...the movie',
        price: 10.0
      })

      movie2 = await Product.create({
        title: 'Mean Girls 2',
        description: 'Mean Girls...the sequel',
        price: 10.0
      })
    })

    it('returns true if the name is valid', () => {
      expect(drama.name).to.equal('drama')
    })

    it('returns false if the name is an empty string', async () => {
      try {
        await Category.create({
          name: ''
        })
      } catch (err) {
        expect(err.message).to.contain('Validation notEmpty on name failed')
      }
    })

    it('returns false if the name is NULL', async () => {
      try {
        await Category.create({})
      } catch (err) {
        expect(err.message).to.contain('notNull Violation')
      }
    })

    it('catagories can be assocaited to products', async () => {
      await movie.addCategory(drama)
      let data = await Product.findAll({
        where: {
          title: 'Mean Girls'
        },
        include: [Category]
      })
      expect(data[0].categories[0].name).to.equal('drama')
    })

    it('catagories can be assocaited to many products', async () => {
      await movie.addCategory(drama)
      await movie2.addCategory(drama)
      let data = await Product.findAll({
        where: {
          title: 'Mean Girls 2'
        },
        include: [Category]
      })
      expect(data[0].categories[0].name).to.equal('drama')
    })

    it('many catagories can be assocaited to a product', async () => {
      await movie.addCategory(drama)
      await movie.addCategory(action)

      let data = await Product.findAll({
        where: {
          title: 'Mean Girls'
        },
        include: [Category]
      })
      expect(data[0].categories[0].name).to.equal('drama')
      expect(data[0].categories[1].name).to.equal('action')
    })
  })
}) // end describe('Category model')
