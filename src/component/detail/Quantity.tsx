import React, { useState } from 'react'

interface ComponentProp {
    product_stock: number
}

const Quantity: React.FC<ComponentProp> = ({ product_stock }) => {
    const [quantity, setQuantity] = useState<number>(1);

    const handleIncreaseQuantity = () => {
        if (quantity < product_stock) {
            setQuantity(quantity => quantity + 1)
        }
    }

    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity => quantity - 1)
        }
    }
    return (
        <div>
            <button onClick={handleDecreaseQuantity} disabled={quantity <= 0}>-</button>
            <button>{quantity}</button>
            <button onClick={handleIncreaseQuantity} disabled={quantity >= product_stock}>+</button>
        </div>
    )
}

export default Quantity