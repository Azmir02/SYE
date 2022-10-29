import React from "react";
import { Link } from "react-router-dom";
import Dots from "../../svg/dots";

const Profileinfooptions = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2"
          to="/"
        >
          Posts
        </Link>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2"
          to="/"
        >
          About
        </Link>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2"
          to="/"
        >
          Friend
        </Link>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2"
          to="/"
        >
          Photos
        </Link>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2"
          to="/"
        >
          Videos
        </Link>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2"
          to="/"
        >
          Check-ins
        </Link>
        <Link
          className="font-primary text-sm lg:text-base text-title_color font-medium mx-1 lg:mx-2"
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
