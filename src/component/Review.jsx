import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

//   console.log(review);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-10">
      <div className="text-center">
        <div className="flex justify-center">
          <span className="py-3 px-5 bg-linear-to-r from-blue-600 to-cyan-400 text-white font-semibold rounded-br-2xl rounded-tl-2xl">
            Testimonials
          </span>
        </div>
        <h2 className="text-4xl font-bold mt-4 mb-3">
          What Our{" "}
          <span className="bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            Clients Say
          </span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Real stories from people whose careers we helped transform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 items-stretch">
        {
            review.map(sR => <ReviewCard key={sR.id} sR={sR}></ReviewCard>)
        }
      </div>
    </div>
  );
};

export default Review;
