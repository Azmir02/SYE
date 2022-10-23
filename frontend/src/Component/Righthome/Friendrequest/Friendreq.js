import React from "react";
import { Link } from "react-router-dom";

const Friendreq = () => {
  return (
    <div className="bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] px-5 py-4 w-[230px] 2xl:w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-primary font-medium text-black">
          Friend requests
        </h3>
        <Link
          to="/"
          className="text-base font-primary text-blue cursor-pointer"
        >
          See All
        </Link>
      </div>
      <div className="relative pb-2 mb-4 after:absolute after:content[] after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#F0F2F5]"></div>
    </div>
  );
};

export default Friendreq;
