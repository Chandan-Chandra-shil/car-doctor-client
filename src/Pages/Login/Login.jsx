import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
const Login = () => {
  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200 border">
          <div className="card-body">
            <h1 className="text-5xl text-rose-500 font-bold">Login</h1>
            <form >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-secondary "
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center my-5">New to Car Doctor? <Link className="text-rose-500 font-bold " to="/singUp"> Sing Up</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
