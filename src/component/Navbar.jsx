import { Link } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto py-3 font-poppins">
      <div className="navbar bg-base-100 px-0">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl flex gap-1.5 items-center bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent font-bold cursor-pointer"
          >
            <img className="w-11 h-11" src={logo} alt="" />
            Career Counseling
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4 items-center text-md text-gray-500">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn bg-linear-to-r from-blue-600 to-cyan-400 text-white font-semibold text-md">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
