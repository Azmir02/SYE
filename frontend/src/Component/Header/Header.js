import React, { useRef, useState } from "react";
import Logo from "../../svg/logo";
import Search from "../../svg/search";
import HomeActive from "../../svg/homeActive";
import Home from "../../svg/home";
import Messenger from "../../svg/messenger";
import Watch from "../../svg/watch";
import Gaming from "../../svg/gaming";
import ArrowDown from "../../svg/arrowDown";
import Cartbag from "../../svg/shoppingBag";
import Market from "../../svg/market";
import Friends from "../../svg/friends";
import OutsideClick from "../../helpers/click";
import Menu from "../../svg/menu";
import { useSelector } from "react-redux";
import Notifications from "../../svg/notifications";
import { Link } from "react-router-dom";
import Searchbox from "./Searchbox";
import MenuOption from "./MenuOption";
import Usermenu from "./usermenu/Usermenu";
import { FriendsActive } from "../../svg";

const Header = ({ page, getPost }) => {
  const users = useSelector((users) => users.login.loggedin);
  const [show, setShow] = useState(false);
  const [menushow, setMenushow] = useState(false);
  const [usermenu, setUsermenu] = useState(false);

  const clickOutside = useRef(null);
  const menuClick = useRef(null);
  const usermenuClick = useRef(null);
  OutsideClick(clickOutside, () => {
    setShow(false);
  });
  OutsideClick(menuClick, () => {
    setMenushow(false);
  });
  OutsideClick(usermenuClick, () => {
    setUsermenu(false);
  });

  return (
    <div className="heading flex justify-between items-center px-4 py-2 shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] fixed top-0 left-0 w-full z-[999] bg-main_bg">
      <div className="left-part 2xl:w-[30%] flex items-center relative">
        <div className="2xl:mr-5">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div
          className="search ml-5 lg:ml-0 px-0 py-0 flex items-center justify-center lg:justify-start bg-input_color lg:px-4 lg:py-2 rounded-full"
          onClick={() => {
            setShow(true);
          }}
        >
          <Search color="#65676B" />
          <input
            type="text"
            className="hidden lg:block focus:outline-none ml-2 bg-input_color font-primary text-base"
            placeholder="Search"
            onClick={() => {
              setShow(true);
            }}
          />
        </div>

        <div
          className="absolute top-[-5px] md:top-[-12px] left-[-16px] md:left-[-12px] z-[1]"
          ref={clickOutside}
        >
          {show && <Searchbox setShow={setShow} users={users} />}
        </div>
      </div>
      <div className="middle-part  2xl:w-[66%] mx-auto flex items-center justify-center">
        <Link
          to="/"
          className="hidden sm:block hover:bg-hover_clr lg:px-5 lg:py-2 px-2 py-2 md:px-5 md:py-2 2xl:px-12 2xl:py-3 rounded-md transition-all ease-linear duration-100"
          onClick={() => getPost()}
        >
          {page === "home" ? <HomeActive /> : <Home />}
        </Link>
        <Link
          to="/"
          className="hidden md:block hover:bg-hover_clr lg:px-5 lg:py-2 px-2 py-2 md:px-5 md:py-2 2xl:px-12 2xl:py-3 rounded-md transition-all ease-linear duration-100"
        >
          <Watch />
        </Link>
        <Link
          to="/"
          className="hidden lg:block hover:bg-hover_clr lg:px-5 lg:py-2  px-2 py-2 md:px-5 md:py-2 2xl:px-12 xl:py-3 rounded-md transition-all ease-linear duration-100"
        >
          <Market />
        </Link>
        <Link
          to="/friends"
          className="hover:bg-hover_clr hidden md:block px-2 py-2 lg:px-5 lg:py-2 2xl:px-12 2xl:py-3 rounded-md transition-all ease-linear duration-100"
        >
          {page === "friends" ? <FriendsActive /> : <Friends />}
        </Link>
        <Link
          to="/"
          className="hover:bg-hover_clr hidden md:block px-2 py-2 lg:px-5 lg:py-2 2xl:px-12 2xl:py-3 rounded-md transition-all ease-linear duration-100"
        >
          <Cartbag color="#000" />
        </Link>
        <Link
          to="/"
          className="hidden xl:block hover:bg-hover_clr lg:px-5 lg:py-2 px-2 py-2 md:px-5 md:py-2 2xl:px-12 2xl:py-3 rounded-md transition-all ease-linear duration-100"
        >
          <Gaming />
        </Link>
      </div>
      <div className="right-part  2xl:w-[30%] flex items-center justify-end">
        <div className="relative" ref={menuClick}>
          <div
            className={`w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-hover_clr cursor-pointer ${
              menushow && "active_button"
            }`}
            onClick={() => {
              setMenushow((prev) => !prev);
            }}
          >
            <Menu />
          </div>
          <div className="menus absolute top-[50px] cursor-auto left-[-189px] md:left-[-451px] lg:left-[-430px]">
            {menushow && <MenuOption />}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-hover_clr cursor-pointer">
            <Messenger />
          </div>
        </div>
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-hover_clr cursor-pointer relative">
          <Notifications />
          <span className="absolute top-[0px] right-[6px] w-[20px] h-[20px] bg-red rounded-full text-center text-white font-primary text-sm font-medium">
            5
          </span>
        </div>
        <div className="relative" ref={usermenuClick}>
          <div
            onClick={() => {
              setUsermenu((prev) => !prev);
            }}
            className="flex items-center justify-between lg:bg-page_color lg:rounded-full lg:px-4 lg:py-2 cursor-pointer"
          >
            <div className="lg:w-[30px] lg:h-[30px] w-[40px] h-[40px] rounded-full bg-page_color lg:bg-white overflow-hidden">
              <img src={users.profilePicture} alt="profilePicture" />
            </div>
            <div className="hidden lg:flex items-center">
              <span className="md:block inline-block ml-3 text-base font-primary text-text_color whitespace-nowrap w-[74px] overflow-hidden text-ellipsis">
                {users?.fName}
              </span>
            </div>
            <div className="hidden lg:block">
              <ArrowDown />
            </div>
          </div>
          <div className="absolute top-[50px] cursor-auto left-[-255px] md:left-[-328px] lg:left-[-196px]">
            {usermenu && <Usermenu user={users} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
