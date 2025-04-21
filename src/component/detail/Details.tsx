import React from 'react'
import StarReview from './StarReview'
import Quantity from './Quantity'
import BuyAndAddCartButton from './BuyAndAddCartButton'

interface ComponentProps {
    product_name: string,
    product_price: number,
    product_detail: string,
    product_rating: number,
    reviewer_count: number,
    product_stock: number
}

const Details: React.FC<ComponentProps> = ({
    product_name,
    product_price,
    product_detail,
    product_rating,
    reviewer_count,
    product_stock,
}) => {
    return (
        <div className="text-sm sm:text-base md:text-[16px] leading-relaxed space-y-2">
            <h2 className="text-base sm:text-lg font-bold">ชื่อสินค้า: {product_name}</h2>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <div className="flex items-center gap-1">
                    <span>คะแนน:</span>
                    <span className="font-semibold">{product_rating}</span>
                    <StarReview rating={product_rating} />
                </div>
                <span className="hidden sm:inline">|</span>
                <p>จำนวนผู้รีวิว: {reviewer_count}</p>
            </div>

            <p className="text-base sm:text-lg font-bold text-red-500">
                ราคา: {product_price.toLocaleString()} บาท
            </p>

            <p className="text-sm sm:text-base">รายละเอียดสินค้า: {product_detail}</p>
            <div className='mt-6 flex flex-col items-center gap-4'>
                <Quantity product_stock={product_stock} />
                <BuyAndAddCartButton />
            </div>


        </div>
    )
}

export default Details