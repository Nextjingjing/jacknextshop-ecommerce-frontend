import { BellIcon } from '@heroicons/react/16/solid'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

const NotificationBtn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const userId = useSelector((state: any) => state.user.user_id)

    const handleClick = () => {
        navigate(`/notification/${userId}`)
    }

    const isActive = location.pathname === `/notification/${userId}`

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white 
                focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 
                ${isActive ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800' : ''}`}
            aria-label="View notifications"
        >
            <BellIcon className="h-6 w-6" />
        </button>
    )
}

export default NotificationBtn
