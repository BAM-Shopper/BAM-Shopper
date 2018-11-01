// import React from 'react'
// import { Redirect } from 'react-router-dom'
// import {connect} from 'react-redux'
// import ProductList from './ProductList'

// class Search extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       query: '',
//       currentlyDisplayed: []
//     }
//   }

//   handleInputChange = evt => {
//     const reduxState = this.props.products
//     let newDisplay = reduxState.filter(product => {
//       product.title.toLowerCase().includes(evt.target.value.toLowerCase())
//     })
//     this.setState({
//       query: evt.target.value,
//       currentlyDisplayed: newDisplay
//     })
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <input
//             placeholder="Search movies"
//             ref={input => this.search = input}
//             onChange={this.handleInputChange}
//           />
//         </form>
//         <ProductList products={this.state.currentlyDisplayed} />
//       </div>
//     )
//   }
// }

// const mapState = ({products}) => ({products})

// export default connect(mapState)(Search)
