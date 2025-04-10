import Home from "../page/Home";
import About from "../page/About";
import Cart from "../page/Cart";
import Notification from "../page/Notification";
import Detail from "../page/Detail";

const navigationForRouter = [
  { name: "หน้าแรก", href: "/", element: <Home /> },
  { name: "เกี่ยวกับเรา", href: "/about", element: <About /> },
  { name: "ตระกร้า", href: "/cart/:userId", element: <Cart /> },
  { name: "แจ้งเตือน", href: "/notification/:userId", element: <Notification /> },
  { name: "รายละเอียดสินค้า", href: "/product/:productId", element: <Detail /> },
];

const navigationForNavBar = [
  { name: "หน้าแรก", href: "/", element: <Home /> },
  { name: "เกี่ยวกับเรา", href: "/about", element: <About /> },
];

export default navigationForRouter;
export { navigationForNavBar };