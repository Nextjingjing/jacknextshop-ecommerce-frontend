import Pagination from "./Pagination";
import ReviewCard from "./ReviewCard";
import ReviewOwnCard from "./ReviewOnwCard";

type ReviewTabProps = {
  totalPages: number;
};

const review = {
  rating: 2,
  comment: "ของดีมาก ส่งไวเกินคาด!",
  like: false,
  fname: "Pruek",
};

const review2 = {
  rating: 2,
  comment:
    "ของดีมาก! ของดีมาก! ของดีมาก! ของดีมาก! ของดีมาก! ของดีมาก! ของดีมาก! ของดีมาก! ของดีมาก! ของดีมาก! ของดีมาก! ของดีมาก!",
  like: true,
  fname: "Jack",
};

const reviews = [review, review2, review, review2, review];

const ReviewTab: React.FC<ReviewTabProps> = ({ totalPages }) => {
  return (
    <div className="p-6 py-20">
      {/*Personal Review */}
      <ReviewOwnCard review={review} />

      <div>
        <h2 className="text-2xl font-bold text-blue-800">รีวิวของผู้อื่น</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {reviews.map((r, index) => (
            <ReviewCard key={index} review={r} />
          ))}
        </div>
      </div>
          <Pagination totalPages={totalPages}/>
    </div>
  );
};

export default ReviewTab;
