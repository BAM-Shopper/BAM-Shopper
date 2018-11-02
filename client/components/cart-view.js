import React from 'react'
import {connect} from 'react-redux'

class Cart extends React.Component {
  render() {
    if (!this.props.cart.id) {
      return <div>EMPTY CART</div>
    } else {
      console.log(this.props.cart)
      return (
        <div>
          {this.props.cart['cart items'].map(item => {
            return <div key={item.id}>{item.id}</div>
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
