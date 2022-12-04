import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  addsearchHistory,
  getsearchHistory,
  removesearchHistory,
  search,
} from "../../functions/Userfriens";
import Return from "../../svg/return";
import Search from "../../svg/search";

const Searchbox = ({ setShow, users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setResult] = useState([]);
  const [getSearch, setGetSearch] = useState([]);
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

  // add Search History
  const searchHistory = async (searchUser) => {
    const res = await addsearchHistory(searchUser, users.token);
    getAllSearch();
  };

  // get Search History
  useEffect(() => {
    getAllSearch();
  }, []);
  const getAllSearch = async () => {
    const res = await getsearchHistory(users.token);
    setGetSearch(res);
  };

  // Remove search history
  const handleRemove = async (searchUser) => {
    removesearchHistory(searchUser, users.token);
    getAllSearch();
  };

  return (
    <div className="searchbox w-[350px] px-2 py-2 lg:px-5 lg:py-3 min-h-[500px] box-border bg-main_bg shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] rounded-md overflow-y-auto max-h-[50vh] main-menu">
      <div className="flex items-center justify-between">
        <div
          className="cursor-pointer"
          onClick={() => {
            setShow(false);
          }}
        >
          <div className="w-[40px] h-[40px] hover:bg-input_color rounded-full flex items-center justify-center transition-all duration-100 ease-in-out">
            <Return color="#65676B" />
          </div>
        </div>
        <div
          className="flex items-center bg-input_color px-2 py-1 lg:px-4 lg:py-2 rounded-full"
          onClick={() => {
            input.current.focus();
          }}
        >
          {showicon && <Search color="#65676B" />}
          <input
            type="text"
            className="focus:outline-none text-text_color ml-2 bg-input_color font-primary text-base"
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
      {searchResult == "" && (
        <div className="flex justify-between items-center mt-5">
          <span className="font-primary text-text_color text-base font-regular">
            Recent Searches
          </span>
          <button className="font-primary text-base text-blue hover:underline">
            See more
          </button>
        </div>
      )}
      <div>
        {getSearch &&
          searchResult == "" &&
          getSearch
            .sort((a, b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
            .map((item, i) => (
              <div key={i} className="mt-5 flex items-center justify-between">
                <Link
                  to={`/profile/${item.user.username}`}
                  onClick={() => searchHistory(item.user._id)}
                >
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px] rounded-full object-cover"
                      src={item.user.profilePicture}
                      alt=""
                    />
                    <span className="ml-3 font-medium text-text_color font-primary">
                      {item.user.fName} {item.user.lName}
                    </span>
                  </div>
                </Link>
                <div
                  className="w-[40px] h-[40px] hover:bg-page_color rounded-full flex items-center justify-center cursor-pointer"
                  onClick={() => handleRemove(item.user._id)}
                >
                  <i className="exit_icon"></i>
                </div>
              </div>
            ))}
      </div>
      <div>
        {searchResult &&
          searchResult.map((search, i) => (
            <div key={i} className="mt-5">
              <Link
                to={`/profile/${search.username}`}
                onClick={() => searchHistory(search._id)}
              >
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
