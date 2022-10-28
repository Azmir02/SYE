import React from "react";

const Profileinfos = ({ profile }) => {
  return (
    <>
      <div>
        <div className="relative cursor-pointer">
          <div
            className="w-[150px] h-[150px] rounded-full bg-cover bg-no-repeat border-4 border-solid border-white"
            style={{
              backgroundImage: `url(${profile.profilePicture})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Profileinfos;
