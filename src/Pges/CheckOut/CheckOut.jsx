import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id,price , img} = service;
  const {user} = useContext(AuthContext)
  const handleBookService = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const booking = {
         name,
         email,
         date,
         title,
         img,
         price
    }
      console.log(booking)
      fetch('http://localhost:5000/bookings',{
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          alert('Service booked successfully')
        }
      })
  }


  return (
    <div>
      <h2 className="text-4xl text-center">Check Out: {title}</h2>
      <div className=" bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse rounded-xl p-8">
          <div className="rounded-xl w-full shadow-2xl bg-base-100">
            <form onSubmit={handleBookService} className="card-body">
              {/* Input Container */}
              <div className=" grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className=" label">
                    <span className=" label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name= 'name'
                    defaultValue={user?.displayName}
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                <label className=" label">
                    <span className=" label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    name = 'date'
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                <label className=" label">
                    <span className=" label-text">Due Amount</span>
                  </label>
                  <input
                    defaultValue={'$' + price}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                <label className=" label">
                    <span className=" label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name = 'email'
                    defaultValue={user?.email}
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control my-6">
                <input className="btn btn-outline btn-warning" type="submit" value="Order Confirm" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
