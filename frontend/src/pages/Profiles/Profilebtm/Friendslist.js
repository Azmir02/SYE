import React from "react";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const Friendslist = ({ friends, loading }) => {
  return (
    <div className="w-full p-4 bg-main_bg rounded-md mt-5 shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]">
      <div className="flex items-center justify-between">
        <h4 className="font-primary text-xl text-text_color font-semibold">
          Friends
        </h4>
        <span className="text-base font-primary text-blue cursor-pointer hover:bg-blue px-3 py-2 hover:text-white rounded-md transition-all ease-linear duration-100">
          See All Friends
        </span>
      </div>
      {loading ? (
        <HashLoader
          className="m-auto"
          color="#21d997"
          loading={loading}
          size={40}
        />
      ) : (
        <div>
          <span className="font-primary text-base text-secondary_color">
            {friends?.length === 0
              ? ""
              : friends?.length === 1
              ? "(1 friends)"
              : `(${friends?.length} friends)`}
          </span>
          <div className="grid grid-cols-3 gap-1 mt-3 rounded-md overflow-hidden">
            {friends &&
              friends?.length &&
              friends.slice(0, 9).map((friends) => (
                <div key={friends._id}>
                  <Link to={`/profile/${friends.username}`}>
                    <div className="cursor-pointer">
                      <img src={friends.profilePicture} alt="" />
                      <h5 className="font-primary text-base text-secondary_color capitalize mt-2">
                        {friends.fName} {friends.lName}
                      </h5>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Friendslist;
