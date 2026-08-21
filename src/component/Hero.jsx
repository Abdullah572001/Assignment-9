import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";


const Hero = () => {
  const [slider, setSlider] = useState();

  // const res = await fetch("/public/sliderData.json")

  useEffect(() => {
    fetch("/sliderData.json")
      .then((res) => res.json())
      .then((data) => setSlider(data));
  }, []);

  const colorFirstWord = (title) => {
    const words = title.split(" ");
    return (
      <>
        <span className="bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
          {words[0]}
        </span>{" "}
        {words.slice(1).join(" ")}
      </>
    );
  };

  if (!slider) {
    return;
  }

  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        {slider.map((item) => (
          <SwiperSlide className="relative" key={item.id}>
            <div className="w-full md:h-150 lg:h-180">
              <img className="w-full object-cover" src={item.image} alt="" />
              <div className="md:absolute inset-0 bg-black/50"></div>
            </div>
            <div className="w-11/12 lg:w-10/12 mx-auto">
              <div className="md:w-3/6 md:absolute mt-4 md:top-20">
                <h2 className="text-6xl font-bold text-black md:text-white">
                  {colorFirstWord(item.title)}
                </h2>
                <p className="text-xl/8 mt-7 text-gray-600 md:text-gray-300">
                  {item.description}
                </p>
                <Link className="btn bg-linear-to-r from-blue-600 to-cyan-400 text-white font-semibold text-xl rounded-full border-none py-8 px-14 mt-10">
                  Become Member
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
