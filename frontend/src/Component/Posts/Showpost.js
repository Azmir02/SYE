import React, { useState } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Dots from "../../svg/dots";
import Reacts from "./Reacts";

const Showpost = ({ posts, user }) => {
  const [showReacts, setShowReacts] = useState(false);
  return (
    <div className="my-5 bg-white rounded-md pb-2">
      <div className="flex p-5 items-center justify-between">
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
        <div className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center transition-all duration-100 ease-linear hover:bg-[#f2f2f2] rounded-full">
          <Dots color="#29313D" />
        </div>
      </div>
      {posts.background ? (
        <div
          className="h-[350px] grid p-5 place-items-center text-center"
          style={{
            backgroundImage: `url(${posts.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <h4 className="text-white font-primary text-[35px] font-bold">
            {posts.text}
          </h4>
        </div>
      ) : (
        <>
          <h4 className="text-black font-primary text-lg font-normal px-5 mb-3">
            {posts.text}
          </h4>
          {posts.images && posts.images.length && (
            <div
              className={`relative cursor-pointer ${
                posts.images.length === 1
                  ? "overflow-hidden w-full h-full"
                  : posts.images.length === 2
                  ? "overflow-hidden grid grid-cols-2 gap-1"
                  : posts.images.length === 3
                  ? "massonary overflow-hidden grid grid-cols-2 gap-1"
                  : posts.images.length === 4
                  ? "massonary2 overflow-hidden grid grid-cols-2 gap-1"
                  : posts.images.length >= 5
                  ? "overflow-hidden grid grid-cols-2 gap-1"
                  : "overflow-hidden"
              }`}
            >
              {posts.images.slice(0, 4).map((item, i) => (
                <img
                  className="w-full h-[380px] object-cover"
                  src={item.url}
                  key={i}
                  alt="postImage"
                />
              ))}
              <div className="absolute top-[69%] right-[20%]">
                {posts.images.length >= 5 && (
                  <span className="font-medium text-black text-[40px] w-[80px] h-[80px] bg-[rgba(255,_255,_255,_0.8)] rounded-full flex items-center justify-center">
                    +{posts.images.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}
        </>
      )}
      <div className="mt-3 flex px-5 py-3 items-center justify-between border-y border-solid border-[#F0F2F5] w-full">
        <div className="w-[40%]">reacts</div>
        <div className="w-[40%] text-right">
          <span className="font-primary text-title_color text-base mr-3 cursor-pointer">
            2 comments
          </span>
          <span className="font-primary text-title_color text-base cursor-pointer">
            1 share
          </span>
        </div>
      </div>
      <div className="flex justify-between px-5 my-2 relative ">
        <div
          className="flex items-center justify-center cursor-pointer w-[200px] py-3 hover:bg-[#F0F2F5] hover:rounded-md transition-all ease-linear duration-150"
          onMouseOver={() => {
            setTimeout(() => {
              setShowReacts(true);
            }, 500);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setShowReacts(false);
            }, 500);
          }}
        >
          <i className="like_icon"></i>
          <span className="font-primary text-title_color text-base ml-2">
            Like
          </span>
        </div>
        {showReacts && (
          <Reacts showReacts={showReacts} setShowReacts={setShowReacts} />
        )}
        <div className="flex items-center justify-center cursor-pointer w-[200px] hover:bg-[#F0F2F5] hover:rounded-md transition-all ease-linear duration-150">
          <i className="comment_icon"></i>
          <span className="font-primary text-title_color text-base ml-2">
            Comment
          </span>
        </div>
        <div className="flex items-center justify-center cursor-pointer w-[200px] hover:bg-[#F0F2F5] hover:rounded-md transition-all ease-linear duration-150">
          <i className="share_icon"></i>
          <span className="font-primary text-title_color text-base ml-2">
            Share
          </span>
        </div>
      </div>
      <div className="border-t border-solid border-[#F0F2F5] pt-2 px-5">
        <div className="flex justify-between">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img src={user?.profilePicture} alt="" />
          </div>
          <div className="w-[90%]">
            <input type="file" hidden />
            <input
              type="text"
              className="w-full rounded-full py-2 px-5  outline-none placeholder:text-title_color"
              placeholder="write a comment..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showpost;
