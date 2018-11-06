import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProduct } from '../store/products'

export class EditProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = props.product
    }

    updateProductSubmit = (evt) => {
        evt.preventDefault()

        const { title, description, price, inventory, imageUrl } = evt.target
        const { handleAdminEdit, updateProduct, product } = this.props
        const { categories } = this.state

        const checkedBoxesValues = Array.from(document.querySelectorAll('input[name=category]:checked')).map((checked) => { return checked.value })
        const newCategory = []

        if (checkedBoxesValues.length) {
            for (let i = 0; i < checkedBoxesValues.length; i++) {
                const j = categories.find((cat) => { return checkedBoxesValues[i] === cat.name })

                if (j === undefined) {
                    newCategory.push(checkedBoxesValues[i])
                }
            }
        }

        const updatedProduct = this.state

        updateProduct(updatedProduct, product.id, newCategory)
        handleAdminEdit()
    }

    render() {
        const { categories } = this.props
        const product = this.state

        return (
            <div>
                <form className="ui form" onSubmit={this.updateProductSubmit}>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder={product.title} onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea rows="2" name="description" placeholder={product.description} onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                    </div>
                    <div className="field">
                        <div className="two fields">
                            <div className="field">
                                <label>Price</label>
                                <input type="text" name="price" placeholder={product.price} onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                            </div>
                            <div className="field">
                                <label>Inventory</label>
                                <input type="text" name="inventory" placeholder={product.inventory} onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Image URL</label>
                        <input type="text" name="imageUrl" placeholder={product.imageUrl} onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                    </div>
                    <div className='field'>
                        <label>Category</label>
                        {categories.map(category => {
                            return (
                                <div className="ui checkbox" key={category.id} >
                                    <input type="checkbox" className='category' name='category' value={category.name} />
                                    <label >{category.name}</label>
                                </div>
                            )
                        })}
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapState = ({ categories }) => {
    return {
        categories
    }
}

export default connect(mapState, { updateProduct })(EditProductForm)