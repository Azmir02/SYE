import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ user }) => {
  return (
    <div className="w-[275px] md:w-[330px] bg-white p-5 rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]">
      <Link
        to="/profile"
        className="flex items-center relative after:absolute after:bottom-0 after:left-0 after:content[] after:bg-[#d3d3d3] after:w-[238px] md:after:w-[290px] after:h-[1px] pb-3"
      >
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={user.profilePicture}
            alt="picture"
          />
        </div>
        <div className="w-[62%] ml-2">
          <h4 className="capitalize font-primary text-lg font-medium text-black">
            {user?.fName} {user?.lName}
          </h4>
        </div>
      </Link>
      <Link
        to="/profile"
        className="w-full md:w-[37%] capitalize text-blue font-primary cursor-pointer font-medium block mt-3"
      >
        See All Profiles
      </Link>
    </div>
  );
};

export default Profile;
