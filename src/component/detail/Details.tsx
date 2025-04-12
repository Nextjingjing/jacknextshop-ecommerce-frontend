import React from 'react'
import StarReview from './StarReview'

interface ComponentProps {
    product_name: string,
    product_price: number,
    product_detail: string,
    product_rating: number,
    reviewer_count: number,
}

const Details: React.FC<ComponentProps> = ({
    product_name,
    product_price,
    product_detail,
    product_rating,
    reviewer_count,
}) => {
    return (
        <div>
            <div>
                <div className='leading-loose'>
                    <h2 className='text-lg font-bold'>ชื่อสินค้า: {product_name}</h2>
                    <div className='flex gap-2'>
                        <p className='text'>คะเเนน: {product_rating}</p>
                        <StarReview rating={product_rating} /> |
                        <p>จำนวนผู้รีวิว: {reviewer_count}</p>
                    </div>
                    <p className='text-lg font-bold text-red-500'>ราคา: {product_price} บาท</p>
                    <p>รายละเอียดสินค้า: {product_detail}</p>
                </div>
            </div>
        </div>
    )
}

export default Details