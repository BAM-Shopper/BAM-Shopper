import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCategory } from '../store/categories'

export class AddCategoryForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: ''
        }
        this.newCategorySubmit = this.newCategorySubmit.bind(this)
    }

    render() {
        return (
            <div className='ui container center aligned' style={{ margin: '0 auto', paddingTop: '5px' }}>
                <h2>Add New Category</h2>
                <div>
                    <form className="ui form" onSubmit={this.newCategorySubmit}>
                        <div className="field">
                            <input type="text" name="category" onChange={evt => this.setState({ [evt.target.name]: evt.target.value })} />
                            <button className="ui button" type="submit" style={{ marginTop: '2px' }}>Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }

    newCategorySubmit(evt) {
        evt.preventDefault()

        const { category } = evt.target
        const { createCategory } = this.props

        const newCategory = { name: category.value }
        createCategory(newCategory)

        category.value = ''
    }
}


export default connect(null, { createCategory })(AddCategoryForm)
