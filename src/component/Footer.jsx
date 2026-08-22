import { Link } from "react-router";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
      <div className="">
        <Link
          to="/"
          className="text-xl flex gap-1.5 justify-center md:justify-start items-center bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent font-bold cursor-pointer"
        >
          <img className="w-11 h-11" src={logo} alt="" />
          Career Counseling
        </Link>
        <p className="text-sm text-gray-500 mt-4">
          Empowering your career journey with expert guidance, personalized
          counseling, and proven strategies for success.
        </p>
        <div className="flex gap-5 justify-center md:justify-start items-center text-2xl mt-4">
          <Link>
            <FaFacebook></FaFacebook>
          </Link>
          <Link>
            <FaLinkedin></FaLinkedin>
          </Link>
          <Link>
            <FaInstagram></FaInstagram>
          </Link>
          <Link>
            <FaXTwitter></FaXTwitter>
          </Link>
        </div>
        <button
          onClick={scrollToTop}
          className="flex items-center mt-4 btn bg-linear-to-r from-blue-600 to-cyan-400 text-white font-semibold text-md mx-auto md:mx-0"
        >
          <MdOutlineKeyboardDoubleArrowUp className="text-xl"></MdOutlineKeyboardDoubleArrowUp>{" "}
          BACK TO TOP
        </button>
      </div>

      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-xl font-semibold mb-4">Site Map</h2>
        <ul className="menu menu-horizontal px-1 flex flex-col items-center md:items-start gap-3 text-md text-gray-500">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Legal</h2>
        <div className="flex flex-col gap-3 text-md text-gray-500">
          <p>Privacy policy</p>
          <p>Terms Of Services</p>
          <p>Lawyer's Corners</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
