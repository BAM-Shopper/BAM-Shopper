import React from 'react'
import {connect} from 'react-redux'

class Cart extends React.Component {
  render() {
    const {cart} = this.props
    if (!cart.id) {
      return <div>EMPTY CART</div>
    } else {
      return (
        <div>
          {cart['cart items'].map(item => {
            return item.product ? (
              <div key={item.id}>
                <h2>{item.product.title}</h2>
                <h2>{item.product.price}</h2>
                <h2>{item.quantity}</h2>
              </div>
            ) : (
              <div key={item.id} />
            )
          })}
        </div>
      )
    }
  }
}

const mapStateToProps = ({cart}) => ({cart})

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     deleteStudent: (studentId) =>
//       dispatch(deleteStudent(studentId)).then(() => {
//         ownProps.history.push("/students");
//       })
//   };
// };

export default connect(mapStateToProps)(Cart)
