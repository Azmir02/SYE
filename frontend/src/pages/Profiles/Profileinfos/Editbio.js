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
  rel,
  detail,
}) => {
  return (
    <div>
      <div>
        {rel ? (
          <select
            name={name}
            value={infos.relationship}
            onChange={handlechange}
            className="w-full outline-none bg-page_color p-1 mt-2 rounded-lg font-primary text-base font-normal cursor-pointer text-text_color"
          >
            <option value="Single">Single</option>
            <option value="In A Relationship">In A Relationship</option>
            <option value="It's Complicated">It's Complicated</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        ) : (
          <textarea
            className="w-full outline-none resize-none bg-page_color text-text_color p-3 mt-2 h-[100px] rounded-lg font-primary text-base font-normal"
            placeholder={placeholder}
            onChange={handlechange}
            name={name}
            value={infos?.[name]}
            maxLength="100"
          ></textarea>
        )}
      </div>
      <div>
        <div className="text-end">
          <span className="font-normal font-primary text-sm text-title_color">
            {!detail && `${max} Characters remaining `}
          </span>
        </div>
        <div className="text-end mt-3">
          <button
            className="bg-page_color px-4 py-2 rounded-md text-text_color font-primary text-base ml-2"
            onClick={() => (!detail ? setShowBio(false) : setShow(false))}
          >
            cancle
          </button>
          <button
            onClick={() => {
              updateDetails();
              setShow(false);
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
