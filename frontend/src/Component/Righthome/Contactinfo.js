import React from "react";
import { Link } from "react-router-dom";

const Contactinfo = ({ user }) => {
  console.log(user.friends);
  return (
    <div>
      {user?.friends?.map((friend, i) => (
        <Link
          to={`/profile/${friend.username}`}
          className="flex items-center justify-between cursor-pointer hover:bg-hover_clr px-3 py-2 rounded-md transition-all ease-in-out duration-200"
          key={i}
        >
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden border border-blue border-solid">
            <img src={friend.profilePicture} alt="" />
          </div>
          <div className="w-[110px] 2xl:w-[240px] 2xl:ml-3">
            <span className="font-primary text-base font-semibold text-text_color capitalize whitespace-nowrap w-[74px]">
              {friend.fName} {friend.lName}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Contactinfo;
