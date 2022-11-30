import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../../functions/Userfriens";
import Return from "../../svg/return";
import Search from "../../svg/search";

const Searchbox = ({ setShow, users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setResult] = useState([]);
  const [showicon, setShowicon] = useState(true);
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  }, []);

  const handleSearch = async () => {
    if (searchTerm === "") {
      setSearchTerm();
    } else {
      const response = await search(searchTerm, users.token);
      setResult(response);
    }
  };

  return (
    <div className="searchbox w-[350px] px-2 py-2 lg:px-5 lg:py-3 min-h-[500px] box-border bg-white shadow-[6px_6px_19px_0px_rgba(230,_230,_230,_0.75)] rounded-md">
      <div className="flex items-center justify-between">
        <div
          className="cursor-pointer"
          onClick={() => {
            setShow(false);
          }}
        >
          <div className="w-[40px] h-[40px] hover:bg-[#f5f5f5] rounded-full flex items-center justify-center transition-all duration-100 ease-in-out">
            <Return color="#65676B" />
          </div>
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
            onKeyUp={handleSearch}
            onChange={(e) => setSearchTerm(e.target.value)}
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
        <span className="font-primary text-black text-base font-regular">
          Recent Searches
        </span>
        <button className="font-primary text-base text-blue hover:underline">
          See more
        </button>
      </div>
      <div>
        {searchResult &&
          searchResult.map((search, i) => (
            <div key={i} className="mt-3">
              <Link to={`/profile/${search.username}`}>
                <div className="flex items-center">
                  <img
                    className="w-[40px] h-[40px] rounded-full object-cover"
                    src={search.profilePicture}
                    alt=""
                  />
                  <span className="ml-3 font-medium text-black font-primary">
                    {search.fName} {search.lName}
                  </span>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Searchbox;
