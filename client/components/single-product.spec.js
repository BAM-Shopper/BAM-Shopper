import { expect } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SingleProduct } from './single-product'
import { ProductInfo } from "./product-info"
import { ProductReview } from './product-reviews'

const adapter = new Adapter()
enzyme.configure({ adapter })

describe('<SingleProduct /> component', () => {
    let singleProduct
    let productInfo
    let productReviews

    beforeEach(() => {
        const movie = {
            title: 'The Fifth Element',
            description: 'A visually appealing ride',
            price: 100.00,
            imageUrl: 'https://bit.ly/2EVs6tZ',
            reviews: [{
                text:
                    "My son's class required headphones this year for computer lab. He hates wearing anything on his head or ears. These are pretty light but sturdy and comfortable on the ears. They stay put and block outside noise. I tried them and I think I'm going to buy some for myself. I'm very impressed with the price and quality.",
                rating: 5,
                user: {
                    email: 'cody@gmail.com'
                }
            },
            {
                text:
                    'I purchased these headphones for my 4 year old grandson. He has had a couple other headphones over the last couple years and they felt flimsy and he refused to wear them. We had an airline flight coming up and thought these would work for him to watch a movie. He left them on the entire time he watched the movie and adjusted easily to fit his head and ears. Only reason for a 4 star instead of 5 star is due to being bulky for travel, however, earbuds would never have worked so I was prepared for bulky.',
                rating: 4,
                user: {
                    email: 'hankhill@yahoo.com'
                }
            }]
        }
        singleProduct = shallow(<SingleProduct product={movie} />)
        productInfo = shallow(<ProductInfo product={movie} />)
        productReviews = shallow(<ProductReview reviews={movie.reviews} />)
    })

    it('renders a <ProductInfo /> component', () => {
        expect(singleProduct.find(ProductInfo).length).to.be.equal(1);
    })
    it('renders a <ProductReviews /> component', () => {
        expect(singleProduct.find(ProductReview).length).to.be.equal(1);
    })

    describe('<ProductInfo /> component', () => {
        it('renders the movie title in an H3', () => {
            expect(productInfo.find('h3').text()).to.be.equal('The Fifth Element')
        })
        it('renders the description', () => {
            expect(productInfo.find('p').text()).to.be.equal('A visually appealing ride')
        })
        it('renders the movie image poster', () => {
            expect(productInfo.find('img').props().src).to.be.equal('https://bit.ly/2EVs6tZ')
        })
    })

    describe('<ProductReviews /> component', () => {
        it('renders a list of product reviews', () => {
            
        })
        it('should have a review with the review\'s content', () => {

        })
        it('should have a review with the review\'s author email', () => {

        })
        it('should have a review with the product\'s rating', () => {

        })
    })
})
