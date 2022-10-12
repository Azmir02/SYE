import React, { useEffect, useRef, useState } from "react";
import Return from "../../svg/return";
import Search from "../../svg/search";

const Searchbox = ({ setShow }) => {
  const [showicon, setShowicon] = useState(true);
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  }, []);
  return (
    <div className="searchbox w-[350px] px-2 py-2 lg:px-5 lg:py-3 min-h-[500px] box-border bg-white shadow-[6px_6px_19px_0px_rgba(230,_230,_230,_0.75)] rounded-md">
      <div className="flex items-center justify-between">
        <div
          className="cursor-pointer"
          onClick={() => {
            setShow(false);
          }}
        >
          <Return color="#65676B" />
        </div>
        <div
          className="flex items-center bg-[#F0F2F5] px-2 py-1 lg:px-4 lg:py-2 rounded-full"
          onClick={() => {
            input.current.focus();
          }}
        >
          {showicon && <Search color="#65676B" />}
          <input
            type="text"
            className="focus:outline-none ml-2 bg-[#F0F2F5] font-primary text-base"
            placeholder="Search"
            ref={input}
            onClick={() => {
              setShowicon(false);
            }}
            onBlur={() => {
              setShowicon(true);
            }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span className="font-primary text-[#848F95] text-base font-regular">
          Recent Searches
        </span>
        <button className="font-primary text-base text-blue hover:underline">
          See more
        </button>
      </div>
    </div>
  );
};

export default Searchbox;
