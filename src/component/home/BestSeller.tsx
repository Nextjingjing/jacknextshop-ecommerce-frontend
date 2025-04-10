
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "สมาร์ททีวี 43 นิ้ว LG NanoCell",
    price: 10990,
    image: "https://www.ld.co.th/image/cache/catalog/ld_co_th/product/lg/2022/TV./NANO75SQA/43NANO75SQA-1000x1000.jpg",
  },
  {
    id: 2,
    name: "ลำโพง JBL Flip 6",
    price: 4671,
    image: "https://media-cdn.bnn.in.th/327844/JBL-Flip-6-Black-1-square_medium.jpg",
  },
  {
    id: 3,
    name: "ไดร์เป่าผม Maxi Air",
    price: 499,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqCrfxk1NxubhxEKyw8ALbYipPpxyet4VEw&s",
  },
  {
    id: 4,
    name: "แอร์เคลื่อนที่ Hisense 8000 BTU",
    price: 7290,
    image: "https://www.hisense.co.th/img/products/gallery/NzMxNjAyMTU/def50f780d1a1de46291fc4d9f92f08d.jpg",
  },
  {
    id: 5,
    name: "ตู้เย็น 4 ประตู Haier 16.1Q",
    price: 18990,
    image: "https://static.siamtv.com/media/catalog/product/cache/ac5899292bba0d707f548a520a8c41b3/R/E/REFR-HAI-MD469GB_3_250317_220131.jpeg",
  },
];

export const BestSeller = () => {
  return (
    <div className="px-4 py-6 bg-blue-50">
      {/* หัวข้อ */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">KILLER DEAL</h2>
      </div>

      {/* Grid สินค้า */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[150px] object-contain mb-3"
            />
            <p className="text-sm text-gray-700 mb-1">{product.name}</p>
            <p className="text-red-600 font-bold text-lg">
              ฿{product.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
