import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteCartItem, putCartItem} from '../store/cart'

export class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'shipping[first-name]': '',
      'shipping[last-name]': '',
      'shipping[address-1]': '',
      'shipping[address-2]': '',
      'shipping[city]': '',
      'shipping[state]': '',
      'shipping[country]': '',
      'shipping[zip]': '',
      'card[type]': '',
      'card[number]': '',
      'card[cvc]': '',
      'card[type]': '',
      'card[expire-month]': '',
      'card[expire-year]': '',
      'receipt[email]': ''
    }
  }

  render() {
    return (
      <form className="ui form">
        <h4 className="ui dividing header">Shipping Information</h4>
        <div className="field">
          <label>Name</label>
          <div className="two fields">
            <div className="field">
              <input
                required
                type="text"
                name="shipping[first-name]"
                placeholder="First Name"
              />
            </div>
            <div className="field">
              <input
                required
                type="text"
                name="shipping[last-name]"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <div className="field">
          <label>Billing Address</label>
          <div className="fields">
            <div className="twelve wide field">
              <input
                required
                type="text"
                name="shipping[address-1]"
                placeholder="Street Address"
              />
            </div>
            <div className="four wide field">
              <input
                type="text"
                name="shipping[address-2]"
                placeholder="Apt #"
              />
            </div>
            <div className="four wide field">
              <input
                requiredtype="text"
                name="shipping[city]"
                placeholder="City"
              />
            </div>
          </div>
        </div>
        <div className="three fields">
          <div className="field">
            <select className="ui fluid dropdown" name="shipping[state]">
              <option value="">State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div className="four wide field">
            <input
              required
              type="text"
              name="shipping[country]"
              placeholder="Country"
            />
          </div>
          <div className="field">
            <div className="eight wide field">
              <input
                required
                type="text"
                name="shipping[zip]"
                placeholder="Zip #"
              />
            </div>
          </div>
        </div>
        <h4 className="ui dividing header">Billing Information</h4>
        <div className="field">
          <label>Card Type</label>
          {/* name="card[type]" */}
          <select className="ui fluid dropdown">
            <option value="">-</option>
            <option value="Visa">Visa</option>
            <option value="American Express">American Express</option>
            <option value="Discover">Discover</option>
          </select>
        </div>
        <div className="fields">
          <div className="seven wide field">
            <label>Card Number</label>
            <input
              required
              type="text"
              name="card[number]"
              maxLength="16"
              placeholder="Card #"
            />
          </div>
          <div className="three wide field">
            <label>CVC</label>
            <input
              required
              type="text"
              name="card[cvc]"
              maxLength="3"
              placeholder="CVC"
            />
          </div>
          <div className="six wide field">
            <label>Expiration</label>
            <div className="two fields">
              <div className="field">
                <select className="ui fluid dropdown" name="card[expire-month]">
                  <option value="">Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="card[expire-year]"
                  maxLength="4"
                  placeholder="Year"
                />
              </div>
            </div>
          </div>
        </div>
        <h4 className="ui dividing header">Receipt</h4>
        <div className="field">
          <label>Send Receipt To:</label>
          <div className="field">
            <div className="sixteen wide field">
              <input
                required
                type="email"
                name="receipt[email]"
                placeholder="example@email.com"
              />
            </div>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({cart}) => ({cart})

const mapDispatchToProps = dispatch => {
  return {
    deleteCartItem: (itemId, cartId) =>
      dispatch(deleteCartItem(itemId, cartId)),
    putCartItem: (item, cartId) => dispatch(putCartItem(item, cartId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm)
