import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service;
  return (
    <div>
      <h2 className="text-4xl">Check Out: {title}</h2>
      <div className=" bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse rounded-xl p-8">
          <div className="rounded-xl w-full shadow-2xl bg-base-100">
            <form className="card-body">
              {/* Input Container */}
              <div className=" grid grid-cols-2 gap-4">
                <div className="form-control">
                  <input
                    type="text"
                    name= 'first-name'
                    placeholder="First Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name = 'last-name'
                    placeholder="Last Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name = 'phone'
                    placeholder="Your Phone"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name = 'email'
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control my-6">
                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered textarea-lg w-full mb-4 "
                ></textarea>
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
