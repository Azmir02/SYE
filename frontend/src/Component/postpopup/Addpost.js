import React from "react";
import { Dots, Feeling, Photo } from "../../svg";

const Addpost = ({ setShow, show }) => {
  return (
    <div className="w-full border border-[#E4E6EB] border-solid flex items-center justify-between mb-5 px-3 rounded-md py-4">
      <div className="w-[30%]">
        <p className="font-semibold text-base text-text_color cursor-pointer">
          Add to you post
        </p>
      </div>
      <div className="flex items-center w-[80%] justify-end gap-1">
        <div
          onClick={() => setShow(true)}
          className={`${
            show
              ? "cursor-pointer w-[40px] h-[40px] bg-page_color rounded-full flex items-center justify-center"
              : "cursor-pointer w-[40px] h-[40px] hover:bg-hover_clr transition-all ease-linear duration-200 rounded-full flex items-center justify-center "
          }`}
        >
          <Photo color="#21D997" />
        </div>
        <div className="cursor-pointer w-[40px] h-[40px] hover:bg-hover_clr transition-all ease-linear duration-200 rounded-full flex items-center justify-center  leading-[0.8]">
          <i className="tag_icon"></i>
        </div>
        <div className="cursor-pointer w-[40px] h-[40px] hover:bg-hover_clr transition-all ease-linear duration-200 rounded-full flex items-center justify-center ">
          <Feeling color="#D9A94A" />
        </div>
        <div className="cursor-pointer w-[40px] h-[40px] hover:bg-hover_clr transition-all ease-linear duration-200 rounded-full flex items-center justify-center  leading-[0.8]">
          <i className="maps_icon"></i>
        </div>
        <div className="cursor-pointer w-[40px] h-[40px] hover:bg-hover_clr transition-all ease-linear duration-200 rounded-full flex items-center justify-center  leading-[0.8]">
          <i className="microphone_icon"></i>
        </div>
        <div className="cursor-pointer w-[40px] h-[40px] hover:bg-hover_clr transition-all ease-linear duration-200 rounded-full flex items-center justify-center">
          <Dots color="#28353E" />
        </div>
      </div>
    </div>
  );
};

export default Addpost;
