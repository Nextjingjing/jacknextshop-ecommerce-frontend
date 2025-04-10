import React from 'react'

type ComponentProp = {
    product_image: string
}

function Image({product_image}: ComponentProp) {
  return (
    <div>
        <img src={product_image} alt="" width={500} height={500}/>
    </div>
  )
}

export default Image