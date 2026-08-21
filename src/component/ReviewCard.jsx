import { FaQuoteLeft } from "react-icons/fa6";

const ReviewCard = ({ sR }) => {
  console.log(sR);
  return (
    <div className="h-full p-5 bg-base-100 shadow hover:shadow-2xl">
      <FaQuoteLeft className="text-cyan-500 text-2xl"></FaQuoteLeft>
      <p className="text-gray-500 ml-6 mt-4">{sR.review}</p>

      <hr className="text-gray-300 mt-6" />

      <div className="flex gap-4 items-center mt-6">
        <img
          className="w-12 h-12 rounded-full ring-2 ring-cyan-400 ring-offset-2"
          src={sR.image}
          alt=""
        />
        <div>
          <h2 className="text-xl font-semibold">{sR.name}</h2>
          <p className="text-sm text-gray-500">{sR.area}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
