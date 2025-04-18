import BestSeller from '../component/home/BestSeller'
import CategorySlideBar from '../component/home/CategorySlidebar'
import Pagination from '../component/home/Pagination';
import { ProductCard } from '../component/home/ProductCard';
import SearchBar from '../component/SearchBar'

type Product = {
  productId: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    productId: 1,
    name: "สมาร์ททีวี 43 นิ้ว LG NanoCell",
    price: 10990,
    image: "https://www.ld.co.th/image/cache/catalog/ld_co_th/product/lg/2022/TV./NANO75SQA/43NANO75SQA-1000x1000.jpg",
  },
  {
    productId: 2,
    name: "ลำโพง JBL Flip 6",
    price: 4671,
    image: "https://media-cdn.bnn.in.th/327844/JBL-Flip-6-Black-1-square_medium.jpg",
  },
  {
    productId: 3,
    name: "ไดร์เป่าผม Maxi Air",
    price: 499,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqCrfxk1NxubhxEKyw8ALbYipPpxyet4VEw&s",
  },
  {
    productId: 4,
    name: "แอร์เคลื่อนที่ Hisense 8000 BTU",
    price: 7290,
    image: "https://www.hisense.co.th/img/products/gallery/NzMxNjAyMTU/def50f780d1a1de46291fc4d9f92f08d.jpg",
  },
  {
    productId: 5,
    name: "ตู้เย็น 4 ประตู Haier 16.1Q",
    price: 18990,
    image: "https://static.siamtv.com/media/catalog/product/cache/ac5899292bba0d707f548a520a8c41b3/R/E/REFR-HAI-MD469GB_3_250317_220131.jpeg",
  },
  {
    productId: 6,
    name: "เครื่องดูดฝุ่นไร้สาย Dyson V8 Slim Fluffy",
    price: 12900,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB26pKHxP2EwoJC9Wr8nkEYclI6ZihALhCNQ&s",
  },
  {
    productId: 7,
    name: "เครื่องฟอกอากาศ Xiaomi Air Purifier 4",
    price: 5290,
    image: "https://i02.appmifile.com/62_operator_sg/27/10/2021/ed89db9f8e4234634a316e2c3e52ef45.png",
  },
  {
    productId: 8,
    name: "เครื่องชงกาแฟ Nespresso Essenza Mini",
    price: 3990,
    image: "https://www.nespresso.com/ecom/medias/sys_master/public/10826415079454/Essenza-Mini-Ruby-Red-367x371.png",
  },
  {
    productId: 9,
    name: "ไมโครเวฟ Samsung 23 ลิตร",
    price: 2990,
    image: "https://inwfile.com/s-cs/yi81iu.jpg",
  },
  {
    productId: 10,
    name: "หม้อทอดไร้น้ำมัน Philips Airfryer XXL",
    price: 8490,
    image: "https://down-th.img.susercontent.com/file/994671fda4e448a6a61b1dd4701ae490",
  },
];

const Home = () => {
  return (
    <>
      <SearchBar />
      <div className="w-full px-4 py-4">
        <BestSeller />
        <div className=' w-full px-4 py-2 '>
          <div className="text-3xl sm:text-2xl lg:text-2xl font-bold text-blue-800 mb-4 text-left">
            กรองหมวดหมู่สินค้า
          </div>
          <div className="flex justify-center">
            <CategorySlideBar />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="px-4 py-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map(product => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center pb-4">
        <Pagination totalPages={10} />
      </div>

    </>
  )
}

export default Home
