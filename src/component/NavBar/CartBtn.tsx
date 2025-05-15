import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import { RootState } from '../../store/store';

const CartBtn = () => {
    const { items } = useSelector((s: RootState) => s.cart);
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => {
        navigate(`/cart`)
    }

    const isActive = location.pathname === `/cart`

    return (
        <div className="relative inline-block">
            <button
                type="button"
                onClick={handleClick}
                className={`rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white 
        focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 
        ${isActive ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800' : ''}`}
                aria-label="View cart"
            >
                <ShoppingCartIcon className="h-6 w-6" />
            </button>

            <div className="absolute -bottom-1 -right-1 rounded-full bg-red-800 text-white w-5 h-5 text-xs flex items-center justify-center"
            hidden={!(items.length > 0)}
            >
                {items.length}
            </div>
        </div>

    )
}

export default CartBtn
