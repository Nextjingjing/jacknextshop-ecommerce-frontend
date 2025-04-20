import { useEffect, useState } from 'react';
import BestSeller from '../component/home/BestSeller'
import CategorySlideBar from '../component/home/CategorySlidebar'
import Pagination from '../component/home/Pagination';
import { ProductCard } from '../component/home/ProductCard';
import SearchBar from '../component/SearchBar'
import axios from 'axios';
import { API_BASE } from '../constants/api';
import { useSearchParams } from 'react-router-dom';

type Product = {
  productId: number;
  name: string;
  price: number;
  image: string;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get('page');
  const page: number = pageParam ? parseInt(pageParam, 10) - 1 : 0;
  const categoryIdParam = searchParams.get('categoryId');
  const categoryId: number | null = categoryIdParam ? parseInt(categoryIdParam, 10) : null
  
  useEffect(() =>{
    const fetchProducts = async () =>{
      try{
        let response;
        if(categoryId !== null){
          response = await axios.get(`${API_BASE}/api/product?size=10&page=${page}&categoryId=${categoryId}`);
        }else{
          response = await axios.get(`${API_BASE}/api/product?size=10&page=${page}`);
        }
        setTotalPages(response.data.totalPages);
        setProducts(response.data.data);
      }catch(error){
        console.log(error);
      }
    }
    fetchProducts();
  },[pageParam, categoryIdParam])
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
        <Pagination totalPages={totalPages} />
      </div>

    </>
  )
}

export default Home
