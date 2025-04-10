import React from 'react'

type ComponentProp = {
    product_image: string
}

function Image({ product_image }: ComponentProp) {
    return (
        <div>
            <img src={product_image} alt="" width={300} height={300} className='object-cover w-full h-64'/>
        </div>
    )
}

export default Image