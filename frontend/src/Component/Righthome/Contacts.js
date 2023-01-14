import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getfriendinforeducer } from "../../functions/getPost";
import { getFriendsInfopage } from "../../functions/Userfriens";
import Dots from "../../svg/dots";
import NewRoom from "../../svg/newRoom";
import Search from "../../svg/search";
import Contactinfo from "./Contactinfo";

const Contacts = () => {
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
  const users = useSelector((users) => users.login.loggedin);
  return (
    <div className="w-[230px] 2xl:w-full bg-main_bg rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] px-5 py-4 mt-3 sticky top-[75px] left-0 overflow-y-auto h-[690px]">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-primary font-medium text-text_color w-[80px]">
          Contacts
        </h3>
        <div className="flex items-center justify-between w-[120px]">
          <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center transition-all ease-out duration-150 cursor-pointer hover:bg-hover_clr">
            <NewRoom color="#888" />
          </div>
          <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center transition-all ease-out duration-150 cursor-pointer hover:bg-hover_clr">
            <Search color="#888" />
          </div>
          <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center transition-all ease-out duration-150 cursor-pointer hover:bg-hover_clr">
            <Dots color="#888" />
          </div>
        </div>
      </div>
      <div className="relative pb-2 mb-4 after:absolute after:content[] after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#F0F2F5]"></div>
      <Contactinfo user={data} />
    </div>
  );
};

export default Contacts;
