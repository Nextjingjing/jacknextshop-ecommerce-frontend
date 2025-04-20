import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ReviewCard from "./ReviewCard";
import ReviewOwnCard from "./ReviewOwnCard";
import axios from "axios";
import { API_BASE } from "../../constants/api";
import { useParams } from "react-router-dom";

type Review = {
  comment: string;
  rating: number;
  userId: number;
  userFname: string;
  productId: number;
  like: boolean;
};

type ReviewTabProps = {
  totalPages: number;
  data: Review[];
};


const ReviewTab: React.FC<ReviewTabProps> = ({ totalPages, data }) => {
  const { productId: id } = useParams();
  const [review, setReview] = useState<Review>();
  useEffect(()=>{
    const fetchReview = async () => {
      try {
        const response = await axios.get(`${API_BASE}/api/review/${id}?onlyMe=true`, {withCredentials: true});
        const { comment, rating, userId, userFname, productId, like } = response.data;
        setReview({comment, rating, userId, userFname, productId, like});
      } catch (error) {
        console.log("Error Fetch review", error);
      }
    }
  fetchReview();
  }
  ,[])
  return (
    <div className="p-6 py-5">
      {/*Personal Review */}
      <ReviewOwnCard review={review? review: null} />

      <div>
        <h2 className="text-2xl font-bold text-blue-800">รีวิวของผู้อื่น</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((r, index) => (
            <ReviewCard key={index} review={r} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
          <Pagination totalPages={totalPages}/>
      </div>
    </div>
  );
};

export default ReviewTab;
