import Home from '../page/Home';
import New from '../page/New';
import About from '../page/About';
import Report from '../page/Report';
import Cart from '../page/Cart';
import Notification from '../page/Notification';

// Use this for automatic route, must use the same format as you can see.
const navigationForRouter = [
  { name: 'หน้าแรก', href: '/', element: <Home /> },
  { name: 'ข่าวสาร', href: '/new', element: <New /> },
  { name: 'เกี่ยวกับเรา', href: '/about', element: <About /> },
  { name: 'รายงานปัญหา', href: '/report', element: <Report /> },
  { name: 'ตระกร้า', href:'/cart/:userId', element: <Cart /> },
  { name: 'แจ้งเตือน', href:'/notification/:userId', element: <Notification /> },
];

// Don't use here
const navigationForNavBar = [
  { name: 'หน้าแรก', href: '/', element: <Home /> },
  { name: 'ข่าวสาร', href: '/new', element: <New /> },
  { name: 'เกี่ยวกับเรา', href: '/about', element: <About /> },
  { name: 'รายงานปัญหา', href: '/report', element: <Report /> },
];

export default navigationForRouter;
export { navigationForNavBar };