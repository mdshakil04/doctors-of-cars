/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import loginImage from '../../assets/images/login/20602934_6300830.jpg'
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {

  const { signIn } = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);
        signIn(email, password)
          .then(result => {
            const user = result.user;
            console.log(user)
          })
          .catch(error => console.log(error))
    }

  return (
    <div className="hero my-12">
      <div className="hero-content flex-col  lg:flex-row">
        <div className="text-center lg:text-left w-1/3 rounded-2xl">
            <img className=" rounded-2xl" src={loginImage} alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-4xl font-bold text-center">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name = 'email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name = 'password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className=" p-4 ">New User....?? Please! <Link to='/signup' className="text-red-600">Sign Up</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
