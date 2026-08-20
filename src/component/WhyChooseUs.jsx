import choose from "../assets/choose.jpg";

const WhyChooseUs = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto py-15 md:flex gap-8 justify-between items-center">
      <div className="md:w-3/6 mb-6 md:mb-0 text-center md:text-left">
        <div className="mb-10">
          <span className="py-3 px-5 bg-linear-to-r from-blue-600 to-cyan-400 text-white font-semibold rounded-br-2xl rounded-tl-2xl">
            Why Choose Us
          </span>
        </div>
        <h2 className="text-4xl text-white font-bold mt-4 mb-6">
          Why We Are The{" "}
          <br />
          <span className="bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            Best Choice
          </span>{" "}
          <br />
          For You
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          We combine years of expertise, personalized guidance, and proven
          strategies to help you make confident career decisions. Whether you
          are a student, job seeker, or professional looking to grow — we are
          here every step of the way.
        </p>
      </div>
      <div className="md:w-3/6">
        <img className="rounded-tl-4xl md:rounded-tl-none md:rounded-bl-4xl" src={choose} alt="" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
