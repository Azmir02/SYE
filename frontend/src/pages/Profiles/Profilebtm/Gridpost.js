import React from "react";
import Showpost from "../../../Component/Posts/Showpost";

const Gridpost = ({ profile, users }) => {
  return (
    <div>
      <div className="w-full rounded-md bg-white px-3 py-2 mt-5 shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]">
        <div className="flex justify-between items-center border-b border-solid border-[#F0F2F5] pb-3">
          <div>
            <h5 className="font-primary font-bold text-xl text-black">Post</h5>
          </div>
          <div className="flex items-center">
            <div className="flex items-center px-4 py-2 bg-[#F0F2F5] rounded-md cursor-pointer hover:bg-[#41EFFF] group transition-all ease-linear duration-150">
              <i className="equalize_icon group-hover:invert"></i>
              <span className="text-base font-primary text-black font-medium ml-2 group-hover:text-white">
                Filter
              </span>
            </div>
            <div className="flex items-center px-4 py-2 bg-[#F0F2F5] rounded-md cursor-pointer ml-2 hover:bg-[#41EFFF] group transition-all ease-linear duration-150">
              <i className="manage_icon group-hover:invert"></i>
              <span className="text-base font-primary text-black font-medium ml-2 group-hover:text-white">
                Manage Post
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-3">
          <div className="flex justify-center items-center w-[50%] cursor-pointer group">
            <i className="list_icon"></i>
            <span className="text-base font-primary text-black font-semibold ml-2 group-hover:text-[#3E3F5E]">
              List View
            </span>
          </div>
          <div className="flex justify-center items-center w-[50%] cursor-pointer group">
            <i className="grid_icon"></i>
            <span className="text-base font-primary text-black font-semibold ml-2 group-hover:text-[#3E3F5E]">
              Grid View
            </span>
          </div>
        </div>
      </div>
      {profile?.posts &&
        profile?.posts?.length &&
        profile?.posts?.map((posts) => (
          <Showpost key={posts._id} posts={posts} user={users} />
        ))}
    </div>
  );
};

export default Gridpost;
