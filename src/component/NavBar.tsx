import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import navigation from '../constants/navigation'
import { Logo } from './NavBar/Logo'
import { Navigation } from './NavBar/Navigation'
import NotificationBtn from './NavBar/NotificationBtn'
import CartBtn from './NavBar/CartBtn'
import { Auth } from './NavBar/Auth'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { API_BASE } from '../constants/api'
import { setUser } from '../slice/userSlice'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_BASE}/api/user`, {
          withCredentials: true,
        });
        const { userId, fname, lname, image } = response.data.data;
        
        dispatch(setUser({ userId, fname, lname, image }));
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            console.log('User is not authenticated');
          } else {
            console.log('Axios error:', error.message);
          }
        } else {
          console.log('Unexpected error:', error);
        }
      }
    };
  
    fetchUser();
  }, [dispatch]);

  return (
    <Disclosure as="nav" className="bg-[#0C0950]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Left: Logo + Brand */}
              <Logo/>

              {/* Center: Navigation */}
              <Navigation/>

              {/* Right: Icons */}
              <div className="flex items-center space-x-4">
                {/* Notification */}
                <NotificationBtn/>

                {/* Cart */}
                <CartBtn/>

                {/* Profile Dropdown */}
                <Auth/>

                {/* Mobile menu button */}
                <div className="sm:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="sm:hidden">
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
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar
