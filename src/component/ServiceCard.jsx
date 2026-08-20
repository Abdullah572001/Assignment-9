import { Link } from "react-router";

const ServiceCard = ({ singleData }) => {
  //   console.log(singleData);
  return (
    <div>
      <img
        className="h-80 w-full object-cover object-top bg-gray-300 rounded-br-4xl"
        src={singleData?.image}
        alt=""
      />
      <div className="text-center p-4 space-y-3">
        <h2 className="text-2xl font-bold mt-3">{singleData?.service_name}</h2>
        <h2 className="text-left text-xl font-semibold">
          {singleData?.counselor_name}
        </h2>
        <p className="text-left text-md text-gray-500">
          {singleData?.category}
        </p>
        <p className="text-left text-md text-blue-400 font-semibold">
          ${singleData?.pricing}
        </p>
        <Link className="underline hover:bg-linear-to-r from-blue-600 to-cyan-400 hover:bg-clip-text hover:text-transparent">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
