import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { increase, decrease } from '../../slice/amountSlice'

interface ComponentProp {
  product_stock: number
}

const Quantity: React.FC<ComponentProp> = ({ product_stock }) => {
  const quantity = useSelector((state: RootState) => state.amount.quantity)
  const dispatch = useDispatch()

  const handleIncreaseQuantity = () => {
    dispatch(increase(product_stock))
  }

  const handleDecreaseQuantity = () => {
    dispatch(decrease())
  }

  return (
    <div>
      <div className='mt-4'>
        <div className='mb-2 font-bold'>จำนวนสินค้า: {product_stock}</div>
        <div className='flex border-[1px] border-black w-fit rounded-md'>
          <span
            onClick={handleDecreaseQuantity}
            className='bg-gray-200 px-2 py-[2px] rounded-l-md cursor-pointer'
          >
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <span className='px-3 py-[2px] text-center'>{quantity}</span>
          <span
            onClick={handleIncreaseQuantity}
            className='bg-gray-200 px-2 py-[2px] rounded-r-md cursor-pointer'
          >
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Quantity
