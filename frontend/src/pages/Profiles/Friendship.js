import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  acceprequest,
  addFriend,
  cancelrequest,
  deleterequest,
  follow,
  unfollow,
  unfriend,
} from "../../functions/Userfriens";
import OutsideClick from "../../helpers/click";

const Friendship = ({ friendships, profileid }) => {
  const users = useSelector((users) => users.login.loggedin);
  const [friendship, setFriendship] = useState(friendships);
  const [friendsmenu, setFriendsmenu] = useState(false);
  const [respondmenu, setRespondmenu] = useState(false);
  const friendMenu = useRef(null);
  const responseMenu = useRef(null);

  OutsideClick(friendMenu, () => {
    setFriendsmenu(false);
  });

  OutsideClick(responseMenu, () => {
    setRespondmenu(false);
  });

  const handleAdd = async () => {
    await addFriend(profileid, users.token);
    setFriendship({ ...friendship, following: true, request: true });
  };

  const handleCancle = async () => {
    await cancelrequest(profileid, users.token);
    setFriendship({ ...friendship, following: false, request: false });
  };

  const handleFollow = async () => {
    await follow(profileid, users.token);
    setFriendship({ ...friendship, following: true });
  };

  const handleUnfollow = async () => {
    await unfollow(profileid, users.token);
    setFriendship({ ...friendship, following: false });
    setFriendsmenu(false);
  };

  const handleConfirm = async () => {
    await acceprequest(profileid, users.token);
    setFriendship({
      ...friendship,
      following: true,
      followers: true,
      request: false,
      requestRecived: false,
    });
    setRespondmenu(false);
  };

  const handleUnfriend = async () => {
    await unfriend(profileid, users.token);
    setFriendship({
      ...friendship,
      following: false,
      followers: false,
      request: false,
      requestRecived: false,
    });
    setFriendsmenu(false);
  };
  const handleDelete = async () => {
    await deleterequest(profileid, users.token);
    setFriendship({
      ...friendship,
      following: false,
      followers: false,
      request: false,
      requestRecived: false,
    });
    setFriendsmenu(false);
  };

  useEffect(() => {
    setFriendship(friendships);
  }, [friendships]);

  return (
    <div className="flex justify-center lg:justify-end">
      {friendship?.friends ? (
        <div className="relative">
          <div className="flex justify-center xl:justify-end pr-5 xl:translate-y-[-108%] relative z-[1]">
            <button
              className="flex items-center bg-blue px-5 py-2 rounded-md"
              onClick={() => setFriendsmenu(true)}
            >
              <img src="../../../icons/friends.png" className="invert" alt="" />
              <span className="font-primary text-base text-white font-normal ml-2">
                Friends
              </span>
            </button>
          </div>
          {friendsmenu && (
            <div
              className="absolute top-[45px] xl:top-[8px] right-[-50px] lg:right-[20px] w-[270px] bg-white shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] rounded-md px-3 py-2 z-[1]"
              ref={friendMenu}
            >
              <div className="flex items-center cursor-pointer hover:bg-[#f2f2f2] p-2 rounded-md transition-all duration-150 ease-linear">
                <img src="../../../icons/favoritesOutline.png" alt="" />
                <span className="ml-2 font-primary text-base font-normal text-black">
                  Favourites
                </span>
              </div>
              <div className="flex items-center cursor-pointer hover:bg-[#f2f2f2] p-2 rounded-md transition-all duration-150 ease-linear">
                <img src="../../../icons/editFriends.png" alt="" />
                <span className="ml-2 font-primary text-base font-normal text-black">
                  Edit Friend List
                </span>
              </div>
              <div
                className="flex items-center cursor-pointer hover:bg-[#f2f2f2] p-2 rounded-md transition-all duration-150 ease-linear"
                onClick={() => handleUnfollow()}
              >
                <img src="../../../icons/unfollowOutlined.png" alt="" />
                <span className="ml-2 font-primary text-base font-normal text-black">
                  Unfollow
                </span>
              </div>
              <div
                className="flex items-center cursor-pointer hover:bg-[#f2f2f2] p-2 rounded-md transition-all duration-150 ease-linear"
                onClick={() => handleUnfriend()}
              >
                <i className="unfriend_outlined_icon"></i>
                <span className="ml-2 font-primary text-base font-normal text-black">
                  Unfriend
                </span>
              </div>
            </div>
          )}
        </div>
      ) : (
        !friendship?.request &&
        !friendship?.requestRecived && (
          <div className="flex justify-center xl:justify-end pr-5 xl:translate-y-[-108%] relative z-[1]">
            <button
              className="flex items-center bg-blue px-5 py-2 rounded-md"
              onClick={() => handleAdd()}
            >
              <img
                src="../../../icons/addfriend.png"
                className="invert"
                alt=""
              />
              <span className="font-primary text-base text-white font-normal ml-2">
                Add Friend
              </span>
            </button>
          </div>
        )
      )}
      {friendship?.request ? (
        <div className="flex justify-center xl:justify-end pr-5 xl:translate-y-[-108%] relative z-[1]">
          <button
            className="flex items-center bg-blue px-5 py-2 rounded-md"
            onClick={() => handleCancle()}
          >
            <img
              src="../../../icons/cancelRequest.png"
              className="invert"
              alt=""
            />
            <span className="font-primary text-base text-white font-normal ml-2">
              Cancle Request
            </span>
          </button>
        </div>
      ) : (
        friendship?.requestRecived && (
          <div className="relative">
            <div className="flex justify-center xl:justify-end pr-5 xl:translate-y-[-108%] relative z-[1]">
              <button
                className="flex items-center bg-blue px-5 py-2 rounded-md"
                onClick={() => setRespondmenu(true)}
              >
                <img
                  src="../../../icons/friends.png"
                  className="invert"
                  alt=""
                />
                <span className="font-primary text-base text-white font-normal ml-2">
                  Respond
                </span>
              </button>
            </div>
            {respondmenu && (
              <div
                className="absolute top-[45px] xl:top-[8px] right-[-50px] lg:right-[20px] w-[270px] bg-white shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] rounded-md px-3 py-2 z-[1]"
                ref={responseMenu}
              >
                <div
                  className="cursor-pointer hover:bg-[#f2f2f2] p-2 rounded-md transition-all duration-150 ease-linear"
                  onClick={() => handleConfirm()}
                >
                  <span className="ml-2 font-primary text-base font-normal text-black">
                    Confirm
                  </span>
                </div>
                <div
                  className="cursor-pointer hover:bg-[#f2f2f2] p-2 rounded-md transition-all duration-150 ease-linear"
                  onClick={() => handleDelete()}
                >
                  <span className="ml-2 font-primary text-base font-normal text-black">
                    Delete
                  </span>
                </div>
              </div>
            )}
          </div>
        )
      )}
      {friendship?.following ? (
        <div className="flex justify-center xl:justify-end pr-5 xl:translate-y-[-108%] relative z-[1]">
          <button className="flex items-center bg-blue px-5 py-2 rounded-md">
            <img src="../../../icons/following.png" className="invert" alt="" />
            <span className="font-primary text-base text-white font-normal ml-2">
              Following
            </span>
          </button>
        </div>
      ) : (
        <div className="flex justify-center xl:justify-end pr-5 xl:translate-y-[-108%] relative z-[1]">
          <button
            className="flex items-center bg-blue px-5 py-2 rounded-md"
            onClick={() => handleFollow()}
          >
            <img src="../../../icons/follow.png" className="invert" alt="" />
            <span className="font-primary text-base text-white font-normal ml-2">
              Follow
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Friendship;
