import React, { Component } from 'react'
import Navbar from "./navbar";
import { Link } from 'react-router-dom'

class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <section>
                    <Link to='/users'>Users</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/orders'>Orders</Link>
                </section>
            </div>
        )
    }
}

export default AdminDashboard
