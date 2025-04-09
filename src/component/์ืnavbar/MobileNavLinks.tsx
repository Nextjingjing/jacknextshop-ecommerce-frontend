import { DisclosureButton } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import navigation from '../../constants/navigation'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const MobileNavLinks = () => {
  const location = useLocation()

  return (
    <div className="space-y-1 px-2 pt-2 pb-3">
      {navigation.map((item) => (
        <DisclosureButton
          key={item.name}
          as={Link}
          to={item.href}
          className={classNames(
            location.pathname === item.href
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium'
          )}
          aria-current={location.pathname === item.href ? 'page' : undefined}
        >
          {item.name}
        </DisclosureButton>
      ))}
    </div>
  )
}

export default MobileNavLinks
