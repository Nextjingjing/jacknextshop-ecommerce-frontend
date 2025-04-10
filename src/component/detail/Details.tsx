import React from 'react'
import Quantity from './Quantity'
import BuyAndAddCartButton from './BuyAndAddCartButton'

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
                    <p className='text'>คะเเนน: {product_rating} | จำนวนผู้รีวิว: {reviewer_count}</p>
                    <p className='text-lg font-bold text-red-500'>ราคา: {product_price} บาท</p>
                    <p>รายละเอียดสินค้า: {product_detail}</p>
                </div>
                <div className='fixed bottom-[385px] left-[569px]'>
                    <Quantity product_stock={10} />
                </div>
                <div className='fixed bottom-[325px] left-[569px]'>
                    <BuyAndAddCartButton />
                </div>
            </div>
        </div>
    )
}

export default Details