/* eslint-disable no-unused-vars */
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Service = ({service}) => {
    const  {_id,img , title , price}= service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          className=" md:h-[250px]"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className=" flex justify-between">
          <div>
            <p className=" text-xl font-bold text-orange-600">Price: ${price}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}><h3 className=" text-2xl text-red-600"><FaAngleRight/></h3></Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
