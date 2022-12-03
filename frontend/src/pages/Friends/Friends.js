import React, { useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Header from "../../Component/Header/Header";
import { getfriendinforeducer } from "../../functions/getPost";
import { getFriendsInfopage } from "../../functions/Userfriens";
import Card from "./Card";

const Friends = ({ getPost, users }) => {
  const [{ loading, error, data }, dispatch] = useReducer(
    getfriendinforeducer,
    {
      loading: false,
      data: {},
      error: "",
    }
  );
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    dispatch({
      type: "FRIEND_REQUEST",
    });
    const data = await getFriendsInfopage(users.token);
    if (data.status === "done") {
      dispatch({
        type: "FRIEND_SUCCESS",
        payload: data.data,
      });
    } else {
      dispatch({
        type: "FRIEND_ERROR",
        payload: data.data,
      });
    }
  };
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>Friends | SYE</title>
      </Helmet>
      <Header page="friends" getPost={getPost} />
      <div className="flex justify-between">
        <div className="bg-white sticky w-[15%] top-[56px] left-0 h-screen pt-[80px] 2xl:px-3 shadow-[-3px_4px_12px_0px_rgba(219,219,219,0.75)] pb-9">
          <div className="flex justify-evenly 2xl:justify-between items-center">
            <h1 className="font-bold font-primary text-black text-2xl capitalize hidden lg:block">
              Friends
            </h1>
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full transition-all ease-linear duration-100 hover:bg-[#f2f2f2] cursor-pointer invisible lg:visible">
              <i className="settings_filled_icon"></i>
            </div>
          </div>
          <div className="mt-5">
            <Link to="/friends">
              <div className="flex items-center justify-center lg:justify-start w-full cursor-pointer md:hover:bg-[#f5f5f5] py-2 px-0 lg:px-3 rounded-md">
                <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-blue">
                  <i className="friends_home_icon invert"></i>
                </div>
                <div className="ml-3 hidden lg:block">
                  <span className="font-normal font-primary text-black text-sm 2xl:text-base 3xl:text-lg capitalize">
                    Home
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/friends/request">
              <div className="flex items-center justify-center lg:justify-start w-full cursor-pointer md:hover:bg-[#f5f5f5] py-2 px-0 lg:px-3 rounded-md">
                <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#D8DADF]">
                  <i className="friends_requests_icon"></i>
                </div>
                <div className="ml-3 hidden lg:block">
                  <span className="font-normal font-primary text-black text-sm 2xl:text-base 3xl:text-lg capitalize">
                    Friend Request
                  </span>
                </div>
                <div className="hidden ml-auto 2xl:block">
                  <div className="flex justify-center items-center">
                    <i className="right_icon"></i>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/friends/sent">
              <div className="flex items-center justify-center lg:justify-start w-full cursor-pointer md:hover:bg-[#f5f5f5] py-2 px-0 lg:px-3 rounded-md">
                <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#D8DADF]">
                  <i className="friends_requests_icon"></i>
                </div>
                <div className="ml-3 hidden lg:block">
                  <span className="font-normal font-primary text-black text-sm 2xl:text-base 3xl:text-lg capitalize">
                    Sent Request
                  </span>
                </div>
                <div className="hidden ml-auto 2xl:block">
                  <div className="flex justify-center items-center">
                    <i className="right_icon"></i>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex items-center justify-center lg:justify-start w-full cursor-pointer md:hover:bg-[#f5f5f5] py-2 px-0 lg:px-3 rounded-md">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#D8DADF]">
                <i className="friends_suggestions_icon"></i>
              </div>
              <div className="ml-3 hidden lg:block">
                <span className="font-normal font-primary text-black text-sm 2xl:text-base 3xl:text-lg capitalize">
                  Suggestions
                </span>
              </div>
              <div className="hidden ml-auto 2xl:block">
                <div className="flex justify-center items-center invisible md:visible">
                  <i className="right_icon"></i>
                </div>
              </div>
            </div>
            <Link to="/friends/all">
              <div className="flex items-center justify-center lg:justify-start w-full cursor-pointer md:hover:bg-[#f5f5f5] py-2 px-0 lg:px-3 rounded-md">
                <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#D8DADF]">
                  <i className="all_friends_icon"></i>
                </div>
                <div className="ml-3 hidden lg:block">
                  <span className="font-normal font-primary text-black text-sm 2xl:text-base 3xl:text-lg capitalize">
                    All Friends
                  </span>
                </div>
                <div className="hidden ml-auto 2xl:block">
                  <div className="flex justify-center items-center invisible md:visible">
                    <i className="right_icon"></i>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex items-center justify-center lg:justify-start w-full cursor-pointer md:hover:bg-[#f5f5f5] py-2 px-0 lg:px-3 rounded-md">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#D8DADF]">
                <i className="birthdays_icon"></i>
              </div>
              <div className="ml-3 hidden lg:block">
                <span className="font-normal font-primary text-black text-sm 2xl:text-base 3xl:text-lg capitalize">
                  Birthdays
                </span>
              </div>
              <div className="hidden ml-auto 2xl:block">
                <div className="ml-auto flex justify-center items-center invisible md:visible">
                  <i className="right_icon"></i>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start w-full cursor-pointer md:hover:bg-[#f5f5f5] py-2 px-0 lg:px-3 rounded-md">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#D8DADF]">
                <i className="all_friends_icon"></i>
              </div>
              <div className="ml-3 hidden lg:block">
                <span className="font-normal font-primary text-black text-sm 2xl:text-base 3xl:text-lg capitalize">
                  Custom Lists
                </span>
              </div>
              <div className="hidden ml-auto 2xl:block">
                <div className="flex justify-center items-center invisible md:visible">
                  <i className="right_icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7fb] w-[85%] pt-[140px] static px-5">
          {(type === undefined || type === "request") && (
            <div>
              <div className="flex items-center justify-between">
                <h2 className="font-bold font-primary text-black text-2xl capitalize">
                  Friend Request
                </h2>
                <Link
                  to="/friends/request"
                  className="text-blue font-primary font-medium hover:underline cursor-pointer"
                >
                  {type === undefined && "See All"}
                </Link>
              </div>
              <div className="border-b border-solid border-[#CED0D4] pb-3 flex items-center gap-3">
                {data.request &&
                  data.request.slice(0, 5).map((user, i) => (
                    <div key={i}>
                      <Card
                        user={user}
                        token={users.token}
                        getData={getData}
                        type="request"
                      />
                    </div>
                  ))}
              </div>
            </div>
          )}
          {(type === undefined || type === "sent") && (
            <div className="mt-9">
              <div className="flex items-center justify-between">
                <h2 className="font-bold font-primary text-black text-2xl capitalize">
                  Send Request
                </h2>
                <Link
                  to="/friends/sent"
                  className="text-blue font-primary font-medium hover:underline cursor-pointer"
                >
                  {type === undefined && "See All"}
                </Link>
              </div>
              <div className="border-b border-solid border-[#CED0D4] pb-3 flex flex-wrap items-center gap-3">
                {data.userSentRequest &&
                  data.userSentRequest.slice(0, 5).map((user, i) => (
                    <div key={i}>
                      <Card
                        user={user}
                        token={users.token}
                        getData={getData}
                        type="sentrequest"
                      />
                    </div>
                  ))}
              </div>
            </div>
          )}
          {(type === undefined || type === "all") && (
            <div className="mt-9">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold font-primary text-black text-2xl capitalize">
                  All Friends
                </h2>
                <Link
                  to="/friends/all"
                  className="text-blue font-primary font-medium hover:underline cursor-pointer"
                >
                  {type === undefined && "See All"}
                </Link>
              </div>
              <div className="pb-3 flex items-center flex-wrap gap-3">
                {data.friends &&
                  data.friends.slice(0, 5).map((user, i) => (
                    <div key={i}>
                      <Card user={user} token={users.token} getData={getData} />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Friends;
