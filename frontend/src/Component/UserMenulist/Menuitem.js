import React from "react";

const Menuitem = ({ icon, title, subtitle, img }) => {
  return (
    <div>
      <div className="flex items-center justify-between p-3 cursor-pointer hover:bg-hover_clr rounded-md transition-all ease-in duration-75">
        {img ? <img src={img} alt="" /> : <i className={icon}></i>}
        <div className="w-[87%]">
          <span className="font-primary text-text_color text-base font-medium block leading-[0.8]">
            {title}
          </span>
          {subtitle && (
            <span className="font-primary text-title_color text-[11px] font-normal leading-[0.8]">
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menuitem;
