import React from "react";

const Shortdetails = ({ link, img, text }) => {
  return (
    <div className="mb-4">
      <a
        className="flex justify-between items-center"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-[35px]" src={img} alt="images" />
        <span className="w-[180px] xl:w-[270px] font-primary text-sm xl:text-base font-semibold text-text_color">
          {text}
        </span>
      </a>
    </div>
  );
};

export default Shortdetails;
