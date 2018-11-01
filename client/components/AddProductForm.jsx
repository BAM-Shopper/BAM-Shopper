import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../store/products'


class AddProductForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            price: '',
            inventory: '',
            imageUrl: '',
        }
        this.newProductSubmit = this.newProductSubmit.bind(this)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <form className="ui form">
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name" />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="last-name" placeholder="Last Name" />
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" className="hidden" />
                            <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )

    }

}



const mapDispatch = { createProduct }

export default connect(null, mapDispatch)(AddProductForm)
