/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const BookingRow = ({booking}) => {
    const {img,name,email, title, price, date} = booking
    return (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={img}
                        />
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
                  <span className="badge badge-ghost badge-sm">
                    {price}
                  </span>
                </td>
                <td>{date}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
    );
};

export default BookingRow;