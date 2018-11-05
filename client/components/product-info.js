import React from 'react'

export const ProductInfo = props => {
    const { imageUrl, description, title } = props.product

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <img
                    src={imageUrl}
                    alt='Movie image poster'
                    style= {{
                      width:'400px',
                      height:'500px'
                    }}
                />
                <p>{description}</p>
            </div>
            <div>
                <button
                    type='button'
                >Add To Cart
                </button>
            </div>
        </div>
    )
}

export default ProductInfo
