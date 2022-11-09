import React from "react";

const Editbio = () => {
  return (
    <div>
      <div>
        <textarea
          placeholder="Enter your bio.."
          className="w-full outline-none resize-none bg-[#F0F2F5] p-3 mt-2 h-[100px] rounded-lg font-primary text-base font-normal"
        ></textarea>
      </div>
      <div>
        <div className="text-end">
          <span className="font-normal font-primary text-sm text-title_color">
            Characters remaining
          </span>
        </div>
      </div>
    </div>
  );
};

export default Editbio;
