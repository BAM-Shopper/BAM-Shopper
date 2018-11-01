import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../store/products'


class AddProductForm extends Component {
    constructor(props) {
        super(props)
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
        return (
            <div>
                <form className="ui form" onSubmit={this.newProductSubmit}>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Die Hard 2" onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea rows="2" name="description" onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                    </div>
                    <div className="field">
                        <div className="two fields">
                            <div className="field">
                                <label>Price</label>
                                <input type="text" name="price" placeholder="9.99" onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                            </div>
                            <div className="field">
                                <label>Inventory</label>
                                <input type="text" name="inventory" placeholder="2" onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Image URL</label>
                        <input type="text" name="imageUrl" placeholder="..." onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )

    }

    newProductSubmit(evt) {
        evt.preventDefault()

        const { title, description, price, inventory, imageUrl } = evt.target
        const { handleProductAdd } = this.props

        const product = {
            title: title.value,
            description: description.value,
            price: price.value,
            inventory: inventory.value,
            imageUrl: imageUrl.value,
        }

        createProduct(product)
        handleProductAdd()

    }

}



const mapDispatch = { createProduct }

export default connect(null, mapDispatch)(AddProductForm)
