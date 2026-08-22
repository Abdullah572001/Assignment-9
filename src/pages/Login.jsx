import { Link } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/authContext";

const Login = () => {

  const {login} = useContext(AuthContext)

  const handleLogin = e => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    // console.log(email, password)

    login(email, password)
      .then(data =>{
        // console.log(data.user)
      })
      .catch(()=>{})
  }

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="flex flex-col gap-10 justify-center items-center my-10">
        <h2 className="text-4xl font-bold">Login Now</h2>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md lg:w-xl border p-5 md:p-14 *:w-full">
            <label className="label">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" name="password" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button className="btn btn-neutral mt-4">Login</button>
            <p className="mt-10">
              Don't have account?{" "}
              <Link
                to="/auth/register"
                className="hover:text-cyan-500 underline"
              >
                Register
              </Link>{" "}
              Now
            </p>
          </fieldset>
        </form>
      </div>

      <div className="bg-cyan-100">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Login;
