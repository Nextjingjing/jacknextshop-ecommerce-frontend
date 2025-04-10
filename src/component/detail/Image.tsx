import React from 'react'

type ComponentProp = {
    product_image: string
}

function Image({ product_image }: ComponentProp) {
    return (
        <div>
            <img src={product_image} alt="" />
        </div>
    )
}

export default Image