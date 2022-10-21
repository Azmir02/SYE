import React from "react";
import { useSelector } from "react-redux";
import Feeling from "../../svg/feeling";
import LiveVideo from "../../svg/liveVideo";
import Photo from "../../svg/photo";

const Post = ({ setVisible }) => {
  const users = useSelector((users) => users.login.loggedin);
  return (
    <div className="mt-5 p-2 md:p-5 bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]">
      <div className="flex items-center justify-between">
        <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden bg-[#F1F4F7]">
          <img
            className="w-full h-full object-cover"
            src={users.profilePicture}
            alt="profilePicture"
          />
        </div>
        <div
          className="w-[90%] px-3 md:px-5 py-2 rounded-full bg-[#f0f2f5] cursor-pointer hover:bg-[#E7E9EB]"
          onClick={() => setVisible(true)}
        >
          <span className="font-primar md:text-base text-primary_bg text-sm">
            What's on you mind <span className="capitalize">{users.fName}</span>{" "}
            ?
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <div className="w-[190px] flex items-center justify-between hover:bg-[#f8f5fa] hover:rounded-md transition-all ease-linear duration-150 px-2 md:px-4 py-2 cursor-pointer">
          <div className="w-[20%]">
            <LiveVideo color="#D17274" />
          </div>
          <div className="w-[80%] text-center">
            <span className="text-sm md:text-base font-primary font-medium text-black">
              Live video
            </span>
          </div>
        </div>
        <div className="w-[190px] flex items-center justify-between hover:bg-[#f8f5fa] hover:rounded-md transition-all ease-linear duration-150 px-2 md:px-4 py-2 cursor-pointer md:mx-5">
          <div className="w-[20%]">
            <Photo color="#21D997" />
          </div>
          <div className="w-[80%] text-center">
            <span className="text-sm md:text-base font-primary font-medium text-black">
              Photo/video
            </span>
          </div>
        </div>
        <div className="w-[190px] flex items-center px-2 md:px-4 py-2 cursor-pointer hover:bg-[#f8f5fa] hover:rounded-md transition-all ease-linear duration-150">
          <div className="w-[20%]">
            <Feeling color="#D9A94A" />
          </div>
          <div className="w-[80%] text-center">
            <span className="text-sm md:text-base font-primary font-medium text-black">
              Feeling/Activity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
