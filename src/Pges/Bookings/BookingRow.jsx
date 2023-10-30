/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id,img, name, email, title, price, date, status } = booking;


  return (
    <div className="overflow-x-auto">
      <table className="table">
       
        <tbody>
          <tr>
            <th>
              <label>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm text-red-800 btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className=" w-24 rounded-xl h-12">
                    <img src={img} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{name}</div>
                  <div className="text-sm opacity-50">{email}</div>
                </div>
              </div>
            </td>
            <td>
              {title}
              <br />
              <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>{date}</td>
            <th>
              {
                status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please confirm</button>}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookingRow;
