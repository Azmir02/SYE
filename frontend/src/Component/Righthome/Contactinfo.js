import React from "react";

const Contactinfo = ({ user }) => {
  return (
    <div>
      <div className="flex items-center justify-between cursor-pointer hover:bg-hover_clr px-3 py-2 rounded-md transition-all ease-in-out duration-200">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-title_color"></div>
        <div className="w-[110px] 2xl:w-[240px] 2xl:ml-3">
          <span className="font-primary text-base font-semibold text-text_color capitalize whitespace-nowrap w-[74px]">
            {user.fName} {user.lName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
