import React from 'react'

const Sidebar = props => {
  if (!props.categories) {
    return <span />
  } else {
    return (
      <div>
        {props.categories.map(category => {
          return (
            <div key={category.id}>
              <button type="button" onClick={props.filterProducts}>
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
