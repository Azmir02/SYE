import React, { useState } from "react";
import Editbio from "./Editbio";

const Details = ({
  text,
  img,
  value,
  handlechange,
  updateDetails,
  placeholder,
  name,
  infos,
  rel,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div onClick={() => setShow(true)}>
        {value ? (
          <div className="flex mt-3 items-center justify-between cursor-pointer">
            <div className="flex items-center">
              <img
                className="invert-[40%]"
                src={`../../../icons/${img}.png`}
                alt=""
              />
              <span className="font-primary font-medium text-base text-title_color ml-3">
                {value}
              </span>
            </div>
            <i className="edit_icon"></i>
          </div>
        ) : (
          <div className="flex mt-3">
            <div className="flex items-center cursor-pointer">
              <i className="rounded_plus_icon"></i>
              <span className="font-primary font-medium text-base text-blue ml-3">
                Add {text}
              </span>
            </div>
          </div>
        )}
      </div>
      {show && (
        <Editbio
          setShow={setShow}
          placeholder={placeholder}
          name={name}
          handlechange={handlechange}
          updateDetails={updateDetails}
          infos={infos}
          detail
          rel={rel}
        />
      )}
    </div>
  );
};

export default Details;
