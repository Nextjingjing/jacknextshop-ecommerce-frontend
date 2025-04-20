import { useEffect, useState } from "react";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../../constants/api";

type Review = {
  rating: number;
  comment: string;
  like: boolean;
  userFname: string;
};

type Props = {
  review: Review | null;
  onSubmit?: (updatedReview: Review) => void;
};

const ReviewOwnCard = ({ review, onSubmit }: Props) => {
  const { productId: id } = useParams(); 
  const [rating, setRating] = useState(0);
  const [userFname, setUserFname] = useState("");
  const [comment, setComment] = useState("");
  const [like, setLike] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (review) {
      setRating(review.rating);
      setComment(review.comment);
      setLike(review.like);
      setUserFname(review.userFname);
    }
  }, [review]);

  const handleSubmit = async () => {
    const payload = {
      rating,
      comment,
      like,
    };

    try {
      let updatedReview: Review;

      if (!review) {
        const res = await axios.post(`${API_BASE}/api/review/${id}`, payload, {
          withCredentials: true,
        });
        updatedReview = res.data; 
      } else {

        await axios.put(`${API_BASE}/api/review/${id}`, payload, {
          withCredentials: true,
        });
        updatedReview = { ...payload, userFname: review.userFname };
      }

      setIsEditing(false);
      setUserFname(updatedReview.userFname); 
      onSubmit?.(updatedReview);
      window.location.reload();
    } catch (error) {
      console.error("Review submit error:", error);
    }
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`h-6 w-6 ${
          i < rating ? "text-yellow-500" : "text-gray-300"
        } ${isEditing ? "cursor-pointer" : ""}`}
        onClick={() => isEditing && setRating(i + 1)}
      />
    ));
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6 md:p-10 mb-10">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
        <h2 className="text-2xl font-bold text-blue-800">รีวิวของคุณ</h2>
        <div className="flex items-center">{renderStars()}</div>
      </div>

      {isEditing ? (
        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-800 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="พิมพ์รีวิวของคุณ..."
        />
      ) : (
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          {comment}
        </p>
      )}

      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-500">
          โดย: {userFname || "ไม่ระบุชื่อ"}
        </p>
        <HeartIcon
          className={`h-6 w-6 transition ${
            like ? "text-pink-500" : "text-gray-800"
          } ${isEditing ? "cursor-pointer" : ""}`}
          onClick={() => isEditing && setLike(!like)}
        />
      </div>

      <div className="text-right">
        {isEditing ? (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            บันทึกรีวิว
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            แก้ไขรีวิว
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewOwnCard;
