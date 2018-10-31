import React from 'react'

/**
 * COMPONENT
 */
export const ProductInfo = props => {
    const { imageUrl, description, title } = props.product
    
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <img
                    src={imageUrl}
                    alt='Movie image poster'
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
