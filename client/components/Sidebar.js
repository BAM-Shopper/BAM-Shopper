import React from 'react'

const Sidebar = props => {
  console.log('props.categories', props.categories)

  if (!props.categories) {
    return <span />
  } else {
    return (
      <div>
        {props.categories.map(category => {
          console.log('category', category)
          return (
            <div key={category.id}>
              <button
                type="button"
                value={category.name}
                onClick={props.filterProducts}
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
