import React from "react";
import { Link } from "react-router-dom";

const Leftprofile = ({ user }) => {
  return (
    <>
      <div className="hidden pb-5 w-[265px] 3xl:w-full xl:block bg-main_bg rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] ">
        <div className="relative">
          <div className="overflow-hidden bg-red h-[100px] rounded-tl-md rounded-tr-md">
            <img
              src={user?.cover}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[80px] h-[80px] absolute top-[55px] left-[50%] translate-x-[-50%] rounded-full overflow-hidden bg-main_bg m-auto">
            <img
              className="object-cover w-full h-full"
              src={user.profilePicture}
              alt=""
            />
          </div>
        </div>
        <div className="mt-12 px-12 xl:px-5 3xl:px-12">
          <div className="text-center">
            <Link to="/profile">
              <h4 className="capitalize font-primary text-lg font-medium text-text_color">
                {user?.fName} {user?.lName}
              </h4>
            </Link>
            <span className="capitalize font-primary leading-[0.8] text-base font-semibold text-secondary_color">
              {user.details && `(${user.details})`}
            </span>
          </div>
        </div>
      </div>
      <div className="w-[265px] bg-white px-2 py-3 rounded-md xl:hidden">
        <Link to="/profile">
          <div className="flex items-center">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={user.profilePicture}
                alt=""
              />
            </div>
            <div className="w-[200px] ml-5">
              <span className="font-primary text-semibold text-black text-lg capitalize">
                {user.fName} {user.lName}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Leftprofile;
