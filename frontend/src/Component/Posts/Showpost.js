import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const Showpost = ({ posts }) => {
  return (
    <div className="my-5 p-5 bg-white rounded-md">
      <div className="flex items-center">
        <div className="flex items-center w-[300px]">
          <div className="w-[50px] h-[50px] border-2 border-solid border-[#D9D9D9] rounded-full overflow-hidden">
            <Link to={`/profile/${posts.user.username}`}>
              <img
                className="w-full h-full object-cover"
                src={posts.user.profilePicture}
                alt="profile"
              />
            </Link>
          </div>
          <div className="w-[200px] ml-3">
            <h4 className="font-primary font-medium text-black capitalize text-lg leading-[0.8]">
              <Link to={`/profile/${posts.user.username}`}>
                {posts.user.fName} {posts.user.lName}
              </Link>
              {posts.type === "profilePicture" &&
                `update${
                  posts.user.gender === "male" ? "his" : "her"
                } profile picture`}
              {posts.type === "cover" &&
                `update${
                  posts.user.gender === "male" ? "his" : "her"
                } cover photo`}
            </h4>
            <span className="font-primary font-regular text-title_color text-sm ">
              <Moment fromNow interval={30}>
                {posts.createdAt}
              </Moment>
            </span>
          </div>
        </div>
        <div>more option</div>
      </div>
    </div>
  );
};

export default Showpost;
