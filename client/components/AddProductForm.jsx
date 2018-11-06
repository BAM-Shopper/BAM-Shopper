import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../store/products'


export class AddProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            price: '',
            inventory: '',
            imageUrl: '',
        }
    }

    newProductSubmit = (evt) => {
        evt.preventDefault()

        const { title, description, price, inventory, imageUrl } = evt.target
        const { handleProductAdd, createProduct } = this.props

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

    render() {
        return (
            <div>
                <form className="ui form addNewProduct" onSubmit={this.newProductSubmit} style={{ width: '50%' }}>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Die Hard 2" onChange={evt => this.setState({ [evt.target.name]: evt.target.value }/* , () => { this.validateField(evt.target.name, evt.target.value) } */)} />
                    </div>

                    <div className="field">
                        <label>Price</label>
                        <input type="text" name="price" placeholder="9.99" onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                    </div>
                    <div className="field">
                        <label>Inventory</label>
                        <input type="text" name="inventory" placeholder="2" onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />

                    </div>
                    <div className="field">
                        <label>Image URL</label>
                        <input type="text" name="imageUrl" onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea rows="2" name="description" onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                    </div>
                </form>
                <button className="ui button" type="submit">Submit</button>
            </div>
        )
    }


}

export default connect(null, { createProduct })(AddProductForm)