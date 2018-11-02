import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Cart extends React.Component {
  render() {
    const {cart} = this.props
    if (!cart.id || !cart['cart items'].length) {
      return <div>EMPTY CART</div>
    } else {
      return (
        <div className="ui container">
          <h2 className="center aligned" style={{textAlign: 'center'}}>
            My Cart
          </h2>
          <div className="ui three column stackable grid container">
            {cart['cart items'].map(item => {
              return item.product ? (
                <div key={item.id}>
                  <div className="image">
                    <img
                      className="ui medium rounded image"
                      src={item.product.imageUrl}
                      style={{
                        width: '200px',
                        height: '250px',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                      }}
                    />
                  </div>
                  <div className="content">
                    <Link
                      to={`/products/${item.product.id}`}
                      className="header"
                    >
                      {item.product.title}
                    </Link>
                  </div>
                  <div className="meta">{item.product.price}</div>
                </div>
              ) : (
                <div key={item.id} />
              )
            })}
          </div>
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
