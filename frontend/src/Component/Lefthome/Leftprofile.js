import React from "react";
import { Link } from "react-router-dom";

const Leftprofile = ({ user }) => {
  return (
    <>
      <div className="hidden w-[265px] 3xl:w-full xl:block bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] ">
        <div className="relative">
          <div className="overflow-hidden bg-red h-[100px] rounded-tl-md rounded-tr-md">
            coverPhoto
          </div>
          <div className="w-[110px] h-[110px] absolute top-10 left-[50%] translate-x-[-50%] rounded-full overflow-hidden bg-[#EEF0F3] m-auto">
            <img
              className="object-cover w-full h-full"
              src={user.profilePicture}
              alt="profilePicture"
            />
          </div>
        </div>
        <div className="mt-16 px-12 xl:px-5 3xl:px-12">
          <div className="text-center">
            <Link to="/profile">
              <h4 className="capitalize font-primary text-lg font-medium text-black">
                {user?.fName} {user?.lName}
              </h4>
            </Link>
            <span className="capitalize font-primary leading-[0.8] text-sm font-regular text-secondary_color">
              Mern stack developer
            </span>
            <p className="font-primary text-base font-regular text-secondary_color mt-2 pb-2">
              It’s a sunny day for malody boy. I’m a malody boy
            </p>
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
