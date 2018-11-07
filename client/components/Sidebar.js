import React from 'react'

export const Sidebar = props => {
  if (!props.categories) {
    return <span />
  } else {
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>Categories</h2>
        {props.categories.map(category => {
          return (
            <div key={category.id}>
              <button
                className="ui blue basic button"
                style={{margin: '5px'}}
                type="button"
                value={category.name}
                onClick={props.handelFilter}
              >
                {category.name}
              </button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Sidebar
