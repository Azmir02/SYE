import React from "react";
import { Link } from "react-router-dom";
import Dots from "../../svg/dots";

const Profileinfooptions = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2 pb-[18px] inline-block active"
          to="/"
        >
          Posts
        </Link>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2 pb-[18px] inline-block"
          to="/"
        >
          About
        </Link>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2 pb-[18px] inline-block"
          to="/"
        >
          Friend
        </Link>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2 pb-[18px] inline-block"
          to="/"
        >
          Photos
        </Link>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2 pb-[18px] inline-block"
          to="/"
        >
          Videos
        </Link>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2 pb-[18px] inline-block"
          to="/"
        >
          Check-ins
        </Link>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2 pb-[18px] inline-block"
          to="/"
        >
          More
        </Link>
      </div>
      <div className="px-3 py-1 bg-[#F0F2F5] rounded-md cursor-pointer">
        <Dots />
      </div>
    </div>
  );
};

export default Profileinfooptions;
