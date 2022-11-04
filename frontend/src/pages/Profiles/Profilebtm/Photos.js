import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { imagereducer } from "../../../functions/getPost";

const Photos = ({ photo }) => {
  return (
    <div className="w-full p-4 bg-white rounded-md mt-5 shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]">
      <div className="flex items-center justify-between">
        <h4 className="font-primary text-xl text-black font-semibold">
          Photos
        </h4>
        <span className="text-base font-primary text-blue cursor-pointer hover:bg-blue px-3 py-2 hover:text-white rounded-md transition-all ease-linear duration-100">
          See Photos
        </span>
      </div>
      <div>
        <span className="font-primary text-base text-title_color">
          (
          {photo.total_count === 0
            ? ""
            : photo.total_count === 1
            ? "1 photos"
            : `${photo.total_count} photos`}
          )
        </span>
        <div className="grid grid-cols-3 gap-1 mt-3 rounded-md overflow-hidden">
          {photo.resources &&
            photo.resources.length &&
            photo.resources
              .slice(0, 9)
              .map((img) => (
                <img
                  className="w-full h-full object-cover"
                  key={img.public_id}
                  src={img.secure_url}
                  alt=""
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
