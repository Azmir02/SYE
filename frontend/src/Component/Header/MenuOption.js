import React, { useRef } from "react";
import { menu_option, creat } from "../../data/Option";
import Search from "../../svg/search";
import Leftpart from "./Leftpart";
const MenuOption = () => {
  const focused = useRef(null);

  return (
    <div className="main_menu w-[307px] lg:w-[750px] h-[90vh] bg-page_color rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] p-5 box-border">
      <h2 className="font-primary text-text_color font-bold text-2xl">Menu</h2>
      <div className=" main-menu grid grid-cols-1 md:grid-cols-[1.7fr_1fr] gap-4 mt-5 overflow-y-auto  h-[95%] select-none">
        <div className="left bg-main_bg w-full rounded-md p-6 hidden md:block">
          <div
            className="flex items-center bg-page_color px-4 py-2 rounded-full"
            onClick={() => {
              focused.current.focus();
            }}
          >
            <Search color="#65676B" />
            <input
              type="text"
              className="focus:outline-none w-[90%] ml-2 bg-page_color font-primary text-base text-text_color"
              placeholder="Search"
              ref={focused}
            />
          </div>
          <div className="mt-4 border-b border-solid border-[#d3d3d3]">
            <h2 className="font-primary text-2xl text-text_color font-bold pl-4">
              Social
            </h2>
            {menu_option.slice(0, 7).map((item, i) => (
              <div
                className="mb-1 cursor-pointer hover:bg-hover_clr px-3 py-3 rounded-md transition-all ease-in duration-200"
                key={i}
              >
                <Leftpart
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 border-b border-solid border-[#d3d3d3]">
            <h2 className="font-primary text-2xl text-text_color font-bold pl-4">
              Entertainment
            </h2>
            {menu_option.slice(7, 11).map((item, i) => (
              <div
                className="mb-1 cursor-pointer hover:hover_clr px-3 py-3 rounded-md transition-all ease-in duration-200"
                key={i}
              >
                <Leftpart
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 border-b border-solid border-[#d3d3d3]">
            <h2 className="font-primary text-2xl text-text_color font-bold pl-4">
              Shopping
            </h2>
            {menu_option.slice(11, 13).map((item, i) => (
              <div
                className="mb-1 cursor-pointer hover:bg-[#F2F2F2] px-3 py-3 rounded-md transition-all ease-in duration-200"
                key={i}
              >
                <Leftpart
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 border-b border-solid border-[#d3d3d3]">
            <h2 className="font-primary text-2xl text-text_color font-bold pl-4">
              Personal
            </h2>
            {menu_option.slice(13, 16).map((item, i) => (
              <div
                className="mb-1 cursor-pointer hover:bg-[#F2F2F2] px-3 py-3 rounded-md transition-all ease-in duration-200"
                key={i}
              >
                <Leftpart
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 border-b border-solid border-[#d3d3d3]">
            <h2 className="font-primary text-2xl text-text_color font-bold pl-4">
              Professional
            </h2>
            {menu_option.slice(16, 19).map((item, i) => (
              <div
                className="mb-1 cursor-pointer hover:bg-[#F2F2F2] px-3 py-3 rounded-md transition-all ease-in duration-200"
                key={i}
              >
                <Leftpart
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 border-b border-solid border-[#d3d3d3]">
            <h2 className="font-primary text-2xl text-text_color font-bold pl-4">
              Community Resource
            </h2>
            {menu_option.slice(19, 24).map((item, i) => (
              <div
                className="mb-1 cursor-pointer hover:bg-[#F2F2F2] px-3 py-3 rounded-md transition-all ease-in duration-200"
                key={i}
              >
                <Leftpart
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h2 className="font-primary text-2xl text-text_color font-bold pl-4">
              More From SYE
            </h2>
            {menu_option.slice(24, 27).map((item, i) => (
              <div
                className="mb-1 cursor-pointer hover:bg-[#F2F2F2] px-3 py-3 rounded-md transition-all ease-in duration-200"
                key={i}
              >
                <Leftpart
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="right w-full lg:w-[240px] bg-main_bg p-5 h-[530px] sticky top-0 rounded-md">
          <h2 className="font-primary text-text_color font-bold text-xl">
            Create
          </h2>
          <div className="mt-4 border-b border-solid border-[#d3d3d3]">
            {creat.slice(0, 3).map((item, i) => (
              <div
                className="mb-3 cursor-pointer flex justify-between items-center"
                key={i}
              >
                <div className="w-[40px] h-[40px] bg-page_color rounded-full flex justify-center items-center">
                  <i className={item.icon}></i>
                </div>
                <div className="w-[71%]">
                  <h5 className="font-primary text-base text-text_color font-medium">
                    {item.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            {creat.slice(3, 8).map((item, i) => (
              <div
                className="mb-3 cursor-pointer flex justify-between items-center"
                key={i}
              >
                <div className="w-[40px] h-[40px] bg-page_color rounded-full flex justify-center items-center">
                  <i className={item.icon}></i>
                </div>
                <div className="w-[71%]">
                  <h5 className="font-primary text-base text-text_color font-medium">
                    {item.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOption;
