import Home from "../page/Home";
import About from "../page/About";
import Cart from "../page/Cart";
import Notification from "../page/Notification";
import Detail from "../page/Detail";
import Profile from "../page/Profile";

const navigationForRouter = [
  { name: "หน้าแรก", href: "/", element: <Home /> },
  { name: "เกี่ยวกับเรา", href: "/about", element: <About /> },
  { name: "ตระกร้า", href: "/cart", element: <Cart /> },
  { name: "แจ้งเตือน", href: "/notification", element: <Notification /> },
  { name: "รายละเอียดสินค้า", href: "/product/:productId", element: <Detail /> },
  { name: "โปรไฟล์", href: "/profile", element: <Profile /> },
];

const navigationForNavBar = [
  { name: "หน้าแรก", href: "/", element: <Home /> },
  { name: "เกี่ยวกับเรา", href: "/about", element: <About /> },
];

export default navigationForRouter;
export { navigationForNavBar };