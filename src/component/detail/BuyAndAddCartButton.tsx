import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faCartShopping } from '@fortawesome/free-solid-svg-icons';

interface BuyAndAddCartButtonProps {
  productId: number;
}

const BuyAndAddCartButton = ({ productId }: BuyAndAddCartButtonProps) => {
  return (
    <div>
      <div className='flex gap-2 mt-8'>
        <button
          className='px-3 py-1 bg-white border-2 border-[#261FB3] rounded-md text-[#261FB3] w-[112px] cursor-pointer hover:bg-[#AFDDFF] transition duration-300 ease-in-out'
        >
          <FontAwesomeIcon icon={faMoneyBill} className='mr-2'/>
          ซื้อ
        </button>
        <button
          className='px-3 py-1 bg-[#261FB3] text-white rounded-md w-[112px] cursor-pointer'
        >
          <FontAwesomeIcon icon={faCartShopping} className='mr-2'/>
          ใส่ตะกร้า
        </button>
      </div>
    </div>
  )
};

export default BuyAndAddCartButton;
