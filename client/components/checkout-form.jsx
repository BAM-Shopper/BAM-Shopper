import React, {Component} from 'react'

import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

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
      'shipping[email]': ''
    }
  }

  onToken = async token => {
    try {
      const {price} = this.props
      await axios.post('/api/checkout/', {
        token,
        price: price * 100
      })
      this.props.handleSuccess(this.state)
    } catch (err) {
      console.log('===There was an error while checking out=== ', err)
      this.props.handleError()
    }
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div>
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
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <input
                  required
                  type="text"
                  name="shipping[last-name]"
                  placeholder="Last Name"
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </div>
              <div className="four wide field">
                <input
                  type="text"
                  name="shipping[address-2]"
                  placeholder="Apt #"
                  onChange={this.handleChange}
                />
              </div>
              <div className="four wide field">
                <input
                  requiredtype="text"
                  name="shipping[city]"
                  placeholder="City"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="three fields">
            <div className="field">
              <select
                className="ui fluid dropdown"
                name="shipping[state]"
                onChange={this.handleChange}
              >
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
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <div className="eight wide field">
                <input
                  required
                  type="text"
                  name="shipping[zip]"
                  placeholder="Zip #"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <h4 className="ui dividing header">Receipt Email</h4>
          <div className="field">
            <input
              required
              type="email"
              name="shipping[email]"
              placeholder="example@email.com"
              onChange={this.handleChange}
            />
          </div>
        </form>
        {/* should be unclickable until form is valid */}
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_HNtcF6Xv6gVHDnS7P7dj0FMX"
        />
      </div>
    )
  }
}

export default CheckoutForm
