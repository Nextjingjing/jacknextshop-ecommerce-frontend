import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/solid";

type Review = {
  rating: number;
  comment: string;
  like: boolean;
  fname: string;
};

type ReviewProps = {
  review: Review;
};

const ratingStarHandler = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <StarIcon
      key={i}
      className={`h-4 w-4 ${
        i < rating ? "text-yellow-500" : "text-gray-300"
      }`}
    />
  ));
};

const ReviewCard = ({ review }: ReviewProps) => {
  return (
    <div className="w-72 p-4 bg-white rounded-lg shadow-md cursor-pointer text-center hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-2">
        {ratingStarHandler(review.rating)}
      </div>

      <p className="text-gray-700 italic text-sm mt-2 px-2 line-clamp-3">
        "{review.comment}"
      </p>

      {review.like && (
        <div className="flex justify-center mt-3">
          <HeartIcon className="h-5 w-5 text-pink-500" />
        </div>
      )}

      <p className="text-xs text-gray-500 mt-3">- {review.fname}</p>
    </div>
  );
};

export default ReviewCard;
