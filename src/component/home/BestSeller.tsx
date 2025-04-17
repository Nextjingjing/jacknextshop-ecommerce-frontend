import { ProductCard } from "./ProductCard";

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
];

const BestSeller = () => {
  return (
    <div className="px-4 py-6 bg-blue-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">KILLER DEAL</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
