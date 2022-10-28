import React from "react";

const Coverphoto = ({ coverPhoto }) => {
  return (
    <div className="bg-[#45437F] w-full pt-[200px] pb-[200px] rounded-tl-md rounded-tr-md relative">
      {coverPhoto && <img src={coverPhoto} alt="coverPhoto" />}
      <div className="absolute top-[20px] right-[20px]">
        <div className="w-[190px] bg-white rounded-md px-4 py-3 flex items-center cursor-pointer hover:bg-[#F0F2F5]">
          <i className="camera_filled_icon"></i>
          <span className="ml-3 leading-[0.8] font-primary text-base font-medium text-black">
            Upload Photo
          </span>
        </div>
        <div className="w-[240px] bg-white p-2 absolute top-[45px] left-[-50px] rounded-md">
          <div className="flex items-center cursor-pointer hover:bg-[#F0F2F5] px-4 py-3 rounded-md">
            <i className="photo_icon"></i>
            <span className="ml-3 font-primary font-medium text-base text-black">
              Select Photo
            </span>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-[#F0F2F5] px-4 py-3 rounded-md">
            <i className="upload_icon"></i>
            <span className="ml-3 font-primary font-medium text-base text-black">
              Upload Photo
            </span>
          </div>
          <div className="w-full h-[1px] bg-[#E6E8EA] my-2"></div>
          <div className="flex items-center cursor-pointer hover:bg-[#F0F2F5] px-4 py-3 rounded-md">
            <i className="trash_icon"></i>
            <span className="ml-3 font-primary font-medium text-base text-black">
              Remove
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverphoto;
