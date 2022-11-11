import React, { useState } from "react";
import Editbio from "./Editbio";

const Details = ({ text, img, value, handlechange, handleEdit }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {value ? (
        <div className="flex mt-3">
          <div className="flex items-center">
            <img src={`../../../icons/${img}.png`} alt="" />
            <span className="font-primary font-medium text-base text-title_color ml-3">
              {value}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex mt-3">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShow(true)}
          >
            <i className="rounded_plus_icon"></i>
            <span className="font-primary font-medium text-base text-blue ml-3">
              Add {text}
            </span>
          </div>
        </div>
      )}
      {show && (
        <Editbio
          setShow={setShow}
          placeholder="Add Othername"
          name="othername"
          handlechange={handlechange}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default Details;
