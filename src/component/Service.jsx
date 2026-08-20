import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("/public/services.json")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  //   console.log(serviceData);

  return (
    <div className="w-11/12 mx-auto my-10 font-nunito">
      <div className="flex justify-center items-center mb-4">
        <span className="py-3 px-5 bg-linear-to-r from-blue-600 to-cyan-400 text-white font-semibold text-md text-center rounded-br-2xl rounded-tl-2xl">
          Our Services
        </span>
      </div>
      <h2 className="text-5xl font-bold text-center mb-4">
        Find The Right Path For You
      </h2>
      <p className="text-center text-gray-500 mb-4">
        Expert guidance to help you navigate your career journey
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {serviceData.map((singleData) => (
          <ServiceCard
            key={singleData?.id}
            singleData={singleData}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
