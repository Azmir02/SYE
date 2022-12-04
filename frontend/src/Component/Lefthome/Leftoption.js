import React, { useState } from "react";
import Optiondata from "./Optiondata";
import { left_home } from "../../data/Lefthome";
import ArrowDown1 from "../../svg/arrowDow1";
import Shortcut from "./Shortcut";

const Leftoption = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="mt-3 w-[265px] 3xl:w-full">
      <div className="bg-main_bg rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] px-0 2xl:px-5 py-4 overflow-y-auto h-[390px] main-menu">
        {left_home.slice(0, 5).map((item, index) => (
          <div key={index} className="mb-[8px] cursor-pointer p-[8px]">
            <Optiondata
              text={item.text}
              icon={item.icon}
              notification={item.notification}
            />
          </div>
        ))}
        {!visible && (
          <div
            className="px-2 py-2 flex items-center cursor-pointer"
            onClick={() => setVisible(true)}
          >
            <div className="w-[40px] h-[40px] bg-page_color rounded-full flex items-center justify-center">
              <ArrowDown1 />
            </div>
            <div className="ml-3">
              <span className="font-primary text-text_color font-semibold text-base">
                Show More
              </span>
            </div>
          </div>
        )}
        {visible &&
          left_home.slice(5, left_home.length).map((item, index) => (
            <div key={index} className="mb-[8px] cursor-pointer p-[8px]">
              <Optiondata
                text={item.text}
                icon={item.icon}
                notification={item.notification}
              />
            </div>
          ))}

        {visible && (
          <div
            className="px-2 py-2 flex items-center cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <div className="w-[40px] h-[40px] bg-page_color rounded-full flex items-center justify-center rotate-180">
              <ArrowDown1 />
            </div>
            <div className="ml-3">
              <span className="font-primary text-text_color font-semibold text-base">
                Show Less
              </span>
            </div>
          </div>
        )}
      </div>
      <Shortcut />
    </div>
  );
};

export default Leftoption;
