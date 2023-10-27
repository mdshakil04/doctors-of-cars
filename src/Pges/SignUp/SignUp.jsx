/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import loginImage from '../../assets/images/login/20602934_6300830.jpg'
import { Link } from "react-router-dom";
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
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
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-4xl font-bold text-center">Please! Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name= 'name'
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
              <input  className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className=" p-4 ">Already have an account....?? Please! <Link to='/login' className="text-red-600">Login</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
