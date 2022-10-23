import React from "react";
import { useSelector } from "react-redux";
import Dots from "../../svg/dots";
import NewRoom from "../../svg/newRoom";
import Search from "../../svg/search";
import Contactinfo from "./Contactinfo";

const Contacts = () => {
  const users = useSelector((users) => users.login.loggedin);
  return (
    <div className="w-[230px] 2xl:w-full bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] px-5 py-4 mt-3 sticky top-[75px] left-0 overflow-y-auto h-[690px]">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-primary font-medium text-black w-[80px]">
          Contacts
        </h3>
        <div className="flex items-center justify-between w-[120px]">
          <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center transition-all ease-out duration-150 cursor-pointer hover:bg-[#F1F4F7]">
            <NewRoom color="#888" />
          </div>
          <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center transition-all ease-out duration-150 cursor-pointer hover:bg-[#F1F4F7]">
            <Search color="#888" />
          </div>
          <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center transition-all ease-out duration-150 cursor-pointer hover:bg-[#F1F4F7]">
            <Dots color="#888" />
          </div>
        </div>
      </div>
      <div className="relative pb-2 mb-4 after:absolute after:content[] after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#F0F2F5]"></div>
      <Contactinfo user={users} />
    </div>
  );
};

export default Contacts;
