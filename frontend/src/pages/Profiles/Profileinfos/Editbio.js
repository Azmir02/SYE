import React from "react";

const Editbio = ({
  max,
  handlechange,
  infos,
  setShow,
  updateDetails,
  placeholder,
  name,
  setShowBio,
  detail,
}) => {
  return (
    <div>
      <div>
        <textarea
          className="w-full outline-none resize-none bg-[#F0F2F5] p-3 mt-2 h-[100px] rounded-lg font-primary text-base font-normal"
          placeholder={placeholder}
          onChange={handlechange}
          name={name}
          value={infos?.[name]}
          maxLength="100"
        ></textarea>
      </div>
      <div>
        <div className="text-end">
          <span className="font-normal font-primary text-sm text-title_color">
            {!detail && `${max} Characters remaining `}
          </span>
        </div>
        <div className="text-end mt-3">
          <button
            className="bg-[#F0F2F5] px-4 py-2 rounded-md text-black font-primary text-base ml-2"
            onClick={() => (!detail ? setShowBio(false) : setShow(false))}
          >
            cancle
          </button>
          <button
            onClick={() => {
              updateDetails();
            }}
            className="bg-blue px-4 py-2 rounded-md text-white font-primary text-base ml-2"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editbio;
