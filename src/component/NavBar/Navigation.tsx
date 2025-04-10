import { Link, useLocation } from 'react-router-dom'
import { navigationForNavBar } from '../../constants/navigation'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Navigation = () => {
  const location = useLocation()

  return (
    <div className="hidden sm:flex space-x-4">
      {navigationForNavBar.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={classNames(
            location.pathname === item.href
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md px-3 py-2 text-sm font-medium'
          )}
          aria-current={location.pathname === item.href ? 'page' : undefined}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
