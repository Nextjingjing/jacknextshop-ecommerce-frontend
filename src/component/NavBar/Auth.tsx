import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { API_BASE } from '../../constants/api';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const handleLogin = () => {
    window.location.href = `${API_BASE}/login`;
}

const AlreadyLogin = () => {
    return(
        <Menu as="div" className="relative">
            <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="Profile"
                />
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem>
                    {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                            )}
                        >
                            Your Profile
                        </a>
                    )}
                </MenuItem>
                <MenuItem>
                    {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                            )}
                        >
                            Settings
                        </a>
                    )}
                </MenuItem>
                <MenuItem>
                    {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                            )}
                        >
                            Sign out
                        </a>
                    )}
                </MenuItem>
            </MenuItems>
        </Menu>
    )
}
export const Auth = () => {
    const user = useSelector((state: RootState) => state.user);
  
    return user.isLogin ? (
      <AlreadyLogin />
    ) : (
      <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleLogin}>
        Sign In / Sign Up
      </button>
    );
}