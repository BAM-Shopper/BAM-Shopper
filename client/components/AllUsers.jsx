import React from 'react'

export const AllUsers = props => {
    if (!props.users.length === 0) return <p>No Users</p>
    const { users } = props


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

export default AllUsers