import React, { useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
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
      <div className="friend">
        <div className="bg-white fixed w-[360px] h-full pt-5 px-3 shadow-[-3px_4px_12px_0px_rgba(219,219,219,0.75)] pb-9">
          <div className="flex justify-between items-center">
            <h1 className="font-bold font-primary text-black text-2xl capitalize">
              Friends
            </h1>
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full transition-all ease-linear duration-100 hover:bg-[#f2f2f2] cursor-pointer">
              <i className="settings_filled_icon"></i>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-center w-full cursor-pointer md:hover:bg-[#f5f5f5] py-2 px-3 rounded-md">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-blue">
                <i className="friends_home_icon invert"></i>
              </div>
              <div className="ml-3 hidden md:block">
                <span className="font-normal font-primary text-black text-lg capitalize">
                  Home
                </span>
              </div>
            </div>
            <div className="flex items-center w-full cursor-pointer md:hover:bg-[#f5f5f5] py-2 px-3 rounded-md">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#D8DADF]">
                <i className="friends_requests_icon"></i>
              </div>
              <div className="ml-3 hidden md:block">
                <span className="font-normal font-primary text-black text-lg capitalize">
                  Friend Request
                </span>
              </div>
              <div className="ml-auto flex justify-center items-center invisible md:visible">
                <i className="right_icon"></i>
              </div>
            </div>
            <div className="flex items-center w-full cursor-pointer md:hover:bg-[#f5f5f5] py-2 px-3 rounded-md">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#D8DADF]">
                <i className="friends_suggestions_icon"></i>
              </div>
              <div className="ml-3 hidden md:block">
                <span className="font-normal font-primary text-black text-lg capitalize">
                  Suggestions
                </span>
              </div>
              <div className="ml-auto flex justify-center items-center invisible md:visible">
                <i className="right_icon"></i>
              </div>
            </div>
            <div className="flex items-center w-full cursor-pointer md:hover:bg-[#f5f5f5] py-2 px-3 rounded-md">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#D8DADF]">
                <i className="all_friends_icon"></i>
              </div>
              <div className="ml-3 hidden md:block">
                <span className="font-normal font-primary text-black text-lg capitalize">
                  All Friends
                </span>
              </div>
              <div className="ml-auto flex justify-center items-center invisible md:visible">
                <i className="right_icon"></i>
              </div>
            </div>
            <div className="flex items-center w-full cursor-pointer md:hover:bg-[#f5f5f5] py-2 px-3 rounded-md">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#D8DADF]">
                <i className="birthdays_icon"></i>
              </div>
              <div className="ml-3 hidden md:block">
                <span className="font-normal font-primary text-black text-lg capitalize">
                  Birthdays
                </span>
              </div>
              <div className="ml-auto flex justify-center items-center invisible md:visible">
                <i className="right_icon"></i>
              </div>
            </div>
            <div className="flex items-center w-full cursor-pointer md:hover:bg-[#f5f5f5] py-2 px-3 rounded-md">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#D8DADF]">
                <i className="all_friends_icon"></i>
              </div>
              <div className="ml-3 hidden md:block">
                <span className="font-normal font-primary text-black text-lg capitalize">
                  Custom Lists
                </span>
              </div>
              <div className="ml-auto flex justify-center items-center invisible md:visible">
                <i className="right_icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7fb] absolute pt-6 px-5 top-[56px] left-[100px] w-[calc(100vw-100px)] md:left-[360px] right-0 bottom-0 md:w-[calc(100%-360px)]">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-bold font-primary text-black text-2xl capitalize">
                Friend Request
              </h2>
              <a className="text-blue font-primary font-medium hover:underline cursor-pointer">
                See All
              </a>
            </div>
            <div className="border-b border-solid border-[#CED0D4] pb-3 grid grid-cols-2 lg:grid-cols-5 gap-3">
              {data.request &&
                data.request.map((user, i) => (
                  <div key={i}>
                    <Card
                      user={user}
                      token={users.token}
                      getData={getData}
                      type="request"
                    />
                  </div>
                ))}
              {data.request &&
                data.request.map((user, i) => (
                  <div key={i}>
                    <Card
                      user={user}
                      token={users.token}
                      getData={getData}
                      type="request"
                    />
                  </div>
                ))}
              {data.request &&
                data.request.map((user, i) => (
                  <div key={i}>
                    <Card
                      user={user}
                      token={users.token}
                      getData={getData}
                      type="request"
                    />
                  </div>
                ))}
              {data.request &&
                data.request.map((user, i) => (
                  <div key={i}>
                    <Card
                      user={user}
                      token={users.token}
                      getData={getData}
                      type="request"
                    />
                  </div>
                ))}
              {data.request &&
                data.request.map((user, i) => (
                  <div key={i}>
                    <Card
                      user={user}
                      token={users.token}
                      getData={getData}
                      type="request"
                    />
                  </div>
                ))}
              {data.request &&
                data.request.map((user, i) => (
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
          <div className="mt-9">
            <div className="flex items-center justify-between">
              <h2 className="font-bold font-primary text-black text-2xl capitalize">
                Send Request
              </h2>
              <a className="text-blue font-primary font-medium hover:underline cursor-pointer">
                See All
              </a>
            </div>
            <div className="border-b border-solid border-[#CED0D4] pb-3 flex items-center flex-col md:flex-row">
              {data.userSentRequest &&
                data.userSentRequest.map((user, i) => (
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
          <div className="mt-9">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold font-primary text-black text-2xl capitalize">
                All Friends
              </h2>
              <a className="text-blue font-primary font-medium hover:underline cursor-pointer">
                See All
              </a>
            </div>
            <div className="pb-3 flex flex-col md:flex-row">
              {data.friends &&
                data.friends.map((user, i) => (
                  <div key={i}>
                    <Card user={user} token={users.token} getData={getData} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
