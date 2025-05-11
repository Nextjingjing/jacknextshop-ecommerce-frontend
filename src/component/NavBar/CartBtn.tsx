import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

const CartBtn = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => {
        navigate(`/cart`)
    }

    const isActive = location.pathname === `/cart`

    return (
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
    )
}

export default CartBtn
