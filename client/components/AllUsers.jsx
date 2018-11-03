import React, { Component } from 'react'
import { connect } from 'react-redux'


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
                                <div className="content">
                                    <a className="header">{user.email}</a>
                                    <div className="description">
                                        <button type='button' className='ui button yellow'>Promote to Admin</button>
                                        <button type='button' className='ui button red'>Delete User</button>
                                        <button type='button' className='ui button grey'>Reset Password</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    userPromote() {

    }
    userDelete() {

    }
    userPassowordReset() {

    }
}

export default AllUsers
