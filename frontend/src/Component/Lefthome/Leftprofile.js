import React from "react";
import { Link } from "react-router-dom";

const Leftprofile = ({ user }) => {
  return (
    <div className="bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]">
      <div className="relative">
        <div className="overflow-hidden bg-[#F0F2F5] h-[100px] rounded-tl-md rounded-tr-md">
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
      <div className="mt-16 px-12">
        <div className="text-center">
          <h4 className="capitalize font-primary text-lg font-medium text-black">
            {user?.fName} {user?.lName}
          </h4>
          <span className="capitalize font-primary text-sm font-regular text-secondary_color">
            Mern stack developer
          </span>
          <p className="font-primary text-base font-regular text-secondary_color mt-3">
            It’s a sunny day for malody boy. I’m a malody boy{" "}
          </p>
        </div>
      </div>

      <div className="border-y border-solid border-[#EEF0F3] mt-3 py-3">
        <div className="px-5 grid grid-cols-2">
          <div className="text-center relative after:content[] after:absolute after:top-0 after:right-0 after:w-[2px] after:h-[50px] after:bg-[#EEF0F3]">
            <h4 className="font-primary text-lg font-medium text-black">
              6,664
            </h4>
            <p className="font-primary text-sm font-regular text-secondary_color">
              Following
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-primary text-lg font-medium text-black">
              9,991
            </h4>
            <p className="font-primary text-sm font-regular text-secondary_color">
              Followers
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-5 text-blue">
        <Link to="/profile" className="font-primary text-base font-medium">
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default Leftprofile;
