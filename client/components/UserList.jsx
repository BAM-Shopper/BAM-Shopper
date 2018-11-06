import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser, deleteUser } from "../store/users";


export class AllUsers extends Component {
    constructor() {
        super()
        this.userPassowordReset = this.userPassowordReset.bind(this)
        this.userPromote = this.userPromote.bind(this)
        this.userDelete = this.userDelete.bind(this)
    }

    render() {
        if (!this.props.users.length === 0) return <p>No Users</p>
        const { users } = this.props


        return (
            <div className='ui list'>
                {
                    users.map(user => {
                        return (
                            <div className="item" key={user.id}>
                                <div className="content" style={{ display: 'flex' }}>
                                    <a className="header">{user.email}</a>
                                    {user.isAdmin ? <i aria-hidden="true" className="user secret big icon" /> : <div />}
                                </div>
                                <div className="description">
                                    {!user.isAdmin ? <button type='button' className='ui button yellow' value={user.id} onClick={this.userPromote}>Promote to Admin</button> : <div />}
                                    <button type='button' className='ui button red' value={user.id} onClick={this.userDelete}>Delete User</button>
                                    <button type='button' className='ui button grey' onClick={this.userPassowordReset}>Reset Password</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    userPromote(evt) {
        evt.preventDefault()
        const { updateUser } = this.props
        const userId = Number(evt.target.value)
        const user = this.props.users.filter(user => user.id === userId)[0]
        updateUser(user, user.id, 'updateAdmin')
    }
    userDelete(evt) {
        evt.preventDefault()
        const { deleteUser } = this.props
        const userId = Number(evt.target.value)
        deleteUser(userId)

    }
    userPassowordReset(evt) {
        evt.preventDefault()
    }
}


export default connect(null, { updateUser, deleteUser })(AllUsers)
