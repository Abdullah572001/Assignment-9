import { Link, useNavigate } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/authContext";

const Register = () => {
  const { createUser, setUser, updateProfileData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(name, photoURL, email, password)

    createUser(email, password)
      .then((data) => {
        console.log(data.user);
        setUser(data.user);
        updateProfileData({
          displayName: name,
          photoURL: photoURL,
        }).then(() => navigate("/"));
      })
      .catch((err) => {
        // console.log('ERROR', err)
      });
  };

  return (
    <div>
      <div>
        <div>
          <Navbar></Navbar>
        </div>

        <div className="flex flex-col gap-10 justify-center items-center my-10">
          <h2 className="text-4xl font-bold">Login Now</h2>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md lg:w-xl border p-5 md:p-14 *:w-full">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Name"
              />

              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                name="photoURL"
                placeholder="Photo URL"
              />

              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4">Register</button>
              <p className="mt-10">
                have an account?{" "}
                <Link
                  to="/auth/login"
                  className="hover:text-cyan-500 underline"
                >
                  Login
                </Link>{" "}
                Now
              </p>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="bg-cyan-100">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Register;
