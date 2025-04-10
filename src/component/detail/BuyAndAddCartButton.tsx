import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function BuyAndAddCartButton() {
    return (
        <div>
            <div className='flex gap-2 mt-8'>
                <button className='px-3 py-1 bg-white border-2 border-[#006A71] rounded-md text-[#006A71] w-[112px] cursor-pointer hover:bg-[#9ACBD0] transition duration-300 ease-in-out'>
                    <FontAwesomeIcon icon={faMoneyBill} className='mr-2'/>
                    ซื้อ
                </button>
                <button className='px-3 py-1 bg-[#006A71] text-white rounded-md w-[112px] cursor-pointer'>
                    <FontAwesomeIcon icon={faCartShopping} className='mr-2'/>
                    ใส่ตะกร้า
                </button>
            </div>
        </div>
    )
}

export default BuyAndAddCartButton