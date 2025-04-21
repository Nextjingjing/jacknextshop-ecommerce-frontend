import Image from '../component/detail/Image'
import Details from '../component/detail/Details'
import Quantity from '../component/detail/Quantity'
import BuyAndAddCartButton from '../component/detail/BuyAndAddCartButton'
import ReviewTab from '../component/detail/ReviewTab'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_BASE } from '../constants/api'
import { useParams, useSearchParams } from 'react-router-dom'

type Product = {
    productId: number;
    name: string;
    price: number;
    description: string;
    image: string;
    stock: number;
};

type Review = {
    comment: string;
    rating: number;
    userId: number;
    userFname: string;
    productId: number;
    like: boolean;
};

type ReviewResponse = {
    data: Review[];
    totalPages: number;
    totalElements: number;
    page: number;
    rating: number; // avg
    size: number;
};
  
function Detail() {
    const { productId: id } = useParams();
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page") || "1";
    const currentPage = parseInt(page, 10);
    const [product, setProduct] = useState<Product>();
    const [reviews, setReviews] = useState<ReviewResponse>();
    useEffect(() => {
        const fetchProduct = async () =>{
            try {
                const response = await axios.get(`${API_BASE}/api/product/${id}`);
                const { productId, name, price, description, image, stock } = response.data.data;
                setProduct({
                    productId,
                    name,
                    price,
                    description,
                    image,
                    stock,
                  });
            } catch (error) {
                console.log("fetch product error");
            }
        }
        const fetchReview = async () => {
            try {
                const response = await axios.get(`${API_BASE}/api/review/${id}?size=5&page=${currentPage-1}`);
                const {data, totalPages, totalElements, page, rating, size} = response.data;
                setReviews({
                    data,
                    totalPages,
                    totalElements,
                    page,
                    rating,
                    size,
                  });
            } catch (error) {
                console.log("fetch product error");
            }
        }
        fetchProduct();
        fetchReview();
    },[page])

    return (
        <div>
            <div className='max-w-[1080px] w-full container mx-auto mt-6 px-4'>
                <div className='bg-white px-4 py-4 rounded-xl relative border-2 border-[#261FB3]'>
                    <div className='flex flex-row gap-6'>
                        <Image product_image={product ? product.image : "https://cdn.pixabay.com/photo/2015/06/09/16/12/error-803716_1280.png"} />
                        <Details 
                        product_name={product ? product.name : "error"}
                        product_price={product ? product.price : 99999999}
                        product_detail={product ? product.description : "error"}
                        product_stock={product? product.stock: 0}
                        product_rating={reviews ? reviews.rating : 0}
                        reviewer_count={reviews ? reviews.totalElements : 0} />
                    </div>
                </div>
            </div>
            {/* Review */}
            <div>
                <ReviewTab totalPages={reviews ? reviews.totalPages: 1} data={reviews? reviews.data : []}/>
            </div>
        </div>
    )
}

export default Detail