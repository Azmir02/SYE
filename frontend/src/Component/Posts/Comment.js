import React from "react";
import Moment from "react-moment";

const Comment = ({ comment }) => {
  return (
    <div className="mb-3">
      <div className="flex items-center">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img src={comment.comentedBy.profilePicture} alt="" />
        </div>
        <div className="ml-3 bg-[#F0F2F5] px-5 py-2 rounded-full">
          <h4 className="text-base font-primary text-black font-medium capitalize">
            {comment.comentedBy.fName} {comment.comentedBy.lName}
          </h4>
          <p className="text-base font-primary text-black font-normal leading-[0.8]">
            {comment.comment}
          </p>
        </div>
      </div>
      <div className="ml-[65px]">
        {comment.image && (
          <img
            className="w-[250px] h-[250px] object-cover rounded-md mt-3"
            src={comment.image}
            alt=""
          />
        )}
      </div>
      <div className="ml-[65px]">
        <span className="text-sm font-primary text-title_color font-normal mr-3 cursor-pointer hover:underline leading-[0.8]">
          Like
        </span>
        <span className="text-base font-primary text-title_color font-normal cursor-pointer hover:underline leading-[0.8]">
          Reply
        </span>
        <span className="text-sm font-primary text-title_color font-normal ml-5">
          <Moment fromNow interval={30}>
            {comment.commentedAt}
          </Moment>
        </span>
      </div>
    </div>
  );
};

export default Comment;
