import React from "react";

const Picturecropper = ({ setImages }) => {
  return (
    <div className="w-[500px] md:w-[700px] h-[800px] bg-white shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-5 py-4 rounded-md">
      <div className="border-b border-solid border-[#F0F2F5] relative py-5">
        <div className="text-center">
          <h4 className="text-black font-primary text-xl font-bold">
            Update Profile Picture
          </h4>
        </div>
        <div
          className="w-[40px] h-[40px] bg-[#F0F2F5] flex items-center justify-center rounded-full absolute top-[50%] right-[15px] translate-y-[-50%] cursor-pointer"
          onClick={() => setImages("")}
        >
          <i className="exit_icon"></i>
        </div>
      </div>
      <div className="mt-5">
        <textarea
          className="w-full border border-solid border-[#F0F2F5] h-[100px] rounded-md bg-[#f7f7fb] resize-none px-5 py-4 focus:outline-none"
          placeholder="Description"
        ></textarea>
      </div>
    </div>
  );
};

export default Picturecropper;
