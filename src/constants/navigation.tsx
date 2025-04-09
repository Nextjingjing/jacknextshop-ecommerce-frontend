import Home from '../page/Home';
import New from '../page/New';
import About from '../page/About';
import Report from '../page/Report';

const navigation = [
  { name: 'หน้าแรก', href: '/', element: <Home /> },
  { name: 'ข่าวสาร', href: '/new', element: <New /> },
  { name: 'เกี่ยวกับเรา', href: '/about', element: <About /> },
  { name: 'รายงานปัญหา', href: '/report', element: <Report /> },
];

export default navigation;
