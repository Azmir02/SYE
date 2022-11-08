import React from "react";
import Profileinfooption from "./Profileinfooption";

const ProfileInfos = ({ details }) => {
  return (
    <div className="bg-whit rounded-md w-full p-4 bg-white mt-5 shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]">
      <h4 className="font-primary text-xl text-black font-semibold">Details</h4>
      <div>
        <Profileinfooption details={details} />
      </div>
    </div>
  );
};

export default ProfileInfos;
