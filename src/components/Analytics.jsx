import React from "react";
import Laptop from "../assets/laptop.jpg";

export default function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 " src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] text-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl  font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
            beatae quis quibusdam nobis? Officia similique explicabo reiciendis
            eum provident praesentium eligendi suscipit, nobis sunt maxime, vero
            dicta delectus, illum expedita?
          </p>
          <div className="md:block flex justify-center">
            <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3  text-[#00df9a]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
