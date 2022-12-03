import React, { useState } from "react";
import Darkmode from "./Darkmode";
import Helpmenu from "./Helpmenu";
import Profile from "./Profile";
import Settingsmenu from "./Settingsmenu";
import { useDispatch } from "react-redux";
import { createUser } from "../../../features/users/userSlice";
import { LoginUser } from "../../../features/users/loginUser";
import { useNavigate } from "react-router-dom";

const Usermenu = ({ user }) => {
  const [visible, setVisible] = useState(0);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  // logout-functionality
  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(createUser(null));
    dispatch(LoginUser(null));
    navigate("/login");
  };

  return (
    <div className="w-[300px] md:w-[360px] bg-main_bg p-3 md:p-7 relative rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]">
      {visible === 0 && (
        <>
          <div className="absolute top-[20px] left-[50%] translate-x-[-50%]">
            <Profile user={user} />
          </div>
          <div className="mt-[160px] cursor-pointer">
            <div className="flex items-center justify-between border-b border-solid border-text_color pb-3">
              <div className="w-[40px] h-[40px] rounded-full bg-page_color flex items-center justify-center">
                <i className="report_filled_icon"></i>
              </div>
              <div className="ml-3 w-[250px]">
                <p className="font-primary text-lg text-text_color font-medium leading-[0.8]">
                  Give Feedback
                </p>
                <span className="font-primary text-sm text-text_color">
                  Help us improve SYE
                </span>
              </div>
            </div>
            <div
              className="flex items-center justify-between my-3"
              onClick={() => {
                setVisible(1);
              }}
            >
              <div className="w-[40px] h-[40px] rounded-full bg-page_color flex items-center justify-center">
                <i className="settings_filled_icon"></i>
              </div>
              <div className="ml-3 w-[200px] md:w-[250px]">
                <p className="font-primary text-lg text-text_color font-medium leading-[0.8]">
                  Settings & privacy
                </p>
              </div>
              <i className="right_icon"></i>
            </div>
            <div
              className="flex items-center justify-between my-3"
              onClick={() => {
                setVisible(2);
              }}
            >
              <div className="w-[40px] h-[40px] rounded-full bg-page_color flex items-center justify-center">
                <i className="help_filled_icon"></i>
              </div>
              <div className="ml-3 w-[200px] md:w-[250px]">
                <p className="font-primary text-lg text-text_color font-medium leading-[0.8]">
                  Helps & support
                </p>
              </div>
              <i className="right_icon"></i>
            </div>
            <div
              className="flex items-center justify-between my-3"
              onClick={() => {
                setVisible(3);
              }}
            >
              <div className="w-[40px] h-[40px] rounded-full bg-page_color flex items-center justify-center">
                <i className="dark_filled_icon"></i>
              </div>
              <div className="ml-3 w-[200px] md:w-[250px]">
                <p className="font-primary text-lg text-text_color font-medium leading-[0.8]">
                  Display & accesssibility
                </p>
              </div>
              <i className="right_icon"></i>
            </div>
            <div
              className="flex items-center justify-between my-3"
              onClick={handleLogout}
            >
              <div className="w-[40px] h-[40px] rounded-full bg-page_color flex items-center justify-center">
                <i className="logout_filled_icon"></i>
              </div>
              <div className="ml-3 w-[200px] md:w-[250px]">
                <p className="font-primary text-lg text-text_color font-medium leading-[0.8]">
                  Logout
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      {visible === 1 && <Settingsmenu setVisible={setVisible} />}
      {visible === 2 && <Helpmenu setVisible={setVisible} />}
      {visible === 3 && <Darkmode setVisible={setVisible} />}
    </div>
  );
};

export default Usermenu;
