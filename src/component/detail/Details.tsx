import React from 'react'

interface ComponentProps {
    product_name: string,
    product_price: number,
    product_rating: number,
    reviewer_count: number,
}

const Details: React.FC<ComponentProps> = ({
    product_name,
    product_price,
    product_rating,
    reviewer_count
}) => {
    return (
        <div>
            <h2>{product_name}</h2>
            <p>คะเเนน: {product_rating} | จำนวนผู้รีวิว: {reviewer_count}</p>
            <p>ราคา: {product_price} บาท</p>
        </div>
    )
}

export default Details