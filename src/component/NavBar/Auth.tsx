import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { API_BASE } from '../../constants/api';
import axios from 'axios';
import { resetUser } from '../../slice/userSlice';
import { Link } from 'react-router-dom';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const handleLogin = () => {
    window.location.href = `${API_BASE}/login`;
}

const AlreadyLogin = () => {
    const dispatch = useDispatch();
    const { image } = useSelector((state: RootState) => state.user);

    const logout = async () => {
        try {
            await axios.post(`${API_BASE}/logout`, {}, {
                withCredentials: true,
            });
            dispatch(resetUser());
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 401) {
                    console.log('Fail to logout.');
                    dispatch(resetUser());
                } else {
                    console.log('Axios error during logout:', error.message);
                }
            } else {
                console.log('Unexpected error during logout:', error);
            }
        }
    };
    return (
        <Menu as="div" className="relative">
            <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <img
                    className="h-8 w-8 rounded-full"
                    src={image}
                    alt="Profile"
                />
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem>
                    {({ active }) => (
                        <Link
                            to="/profile"
                            className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                            )}
                        >
                            Your Profile
                        </Link>
                    )}
                </MenuItem>
                <MenuItem>
                    {({ active }) => (
                        <button
                            onClick={logout}
                            className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block w-full text-left px-4 py-2 text-sm text-gray-700'
                            )}
                        >
                            Sign out
                        </button>
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
        <button className="bg-gray-500 text-white text-sm px-3 py-1.5 sm:text-base sm:px-4 sm:py-2 rounded hover:bg-blue-600" 
        onClick={handleLogin}
        >
            Sign In/Up
        </button>
    );
}