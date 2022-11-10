import React from "react";

const Editbio = ({ max, handleBio, infos }) => {
  return (
    <div>
      <div>
        <textarea
          placeholder="Enter your bio.."
          className="w-full outline-none resize-none bg-[#F0F2F5] p-3 mt-2 h-[100px] rounded-lg font-primary text-base font-normal"
          onChange={handleBio}
          name="bio"
          value={infos?.bio}
          maxLength="100"
        ></textarea>
      </div>
      <div>
        <div className="text-end">
          <span className="font-normal font-primary text-sm text-title_color">
            {max} Characters remaining
          </span>
        </div>
      </div>
    </div>
  );
};

export default Editbio;
