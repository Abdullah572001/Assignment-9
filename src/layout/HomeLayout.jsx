import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Review from "../component/Review";
import Service from "../component/Service";
import WhyChooseUs from "../component/WhyChooseUs";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Hero></Hero>

      <div className="bg-linear-to-b from-white via-white/95 to-[#E6EFFF] py-10">
        <Service></Service>
      </div>

      <div className="bg-[#000916]">
        <WhyChooseUs></WhyChooseUs>
      </div>

      <div className="bg-linear-to-b from-white via-white/95 to-[#E6EFFF] py-10">
        <Review></Review>
      </div>
    </div>
  );
};

export default HomeLayout;
