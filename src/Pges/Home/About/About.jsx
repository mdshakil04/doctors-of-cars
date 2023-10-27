/* eslint-disable no-unused-vars */
import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-16">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" lg:w-1/2 relative md:mb:12">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className=" w-1/2 absolute right-10 top-1/2 border-8 border-white  rounded-lg shadow-2xl" />
        </div>
        <div className=" lg:w-1/2 mt-12">
            <p className=" font-bold text-lg text-red-600">About Us</p>
          <h1 className="text-6xl font-bold">We are qualified &<br/> of experience<br/> in this field</h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className=" pb-4">
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn btn-primary text-white border-none bg-red-500">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
