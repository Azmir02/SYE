import React, { useState } from "react";
import { useSelector } from "react-redux";

import Addpost from "./Addpost";
import Emojipicker from "./Emojipicker";
import Imageviewer from "./Imageviewer";

const Postpopup = () => {
  const users = useSelector((users) => users.login.loggedin);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [images, setImages] = useState([]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[rgba(255,255,255,_0.8)] w-full fixed top-0 left-0 z-[9999]">
        <div className="w-[500px] bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] relative">
          <div className="text-center py-5 border-b border-[#E4E6EB] border-solid">
            <h3 className="font-bold text-lg text-black">Create Post</h3>
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#E4E6EB] rounded-full absolute top-[13px] right-[20px] cursor-pointer">
              <i className="exit_icon"></i>
            </div>
          </div>
          <div className="py-3 px-4 flex items-center">
            <div className="w-[40px] h-[40px] bg-[#E4E6EB] rounded-full">
              {/* for user image */}
            </div>
            <div className="ml-3">
              <p className="font-semibold text-base text-black capitalize">
                {users.fName} {users.lName}
              </p>
              <div className="bg-[#E4E6EB] p-2 flex items-center justify-between rounded-md cursor-pointer">
                <img src="../../../icons/public.png" alt="globe" />
                <span className="text-black text-sm font-semibold leading-[0.8]">
                  public
                </span>
                <i className="arrowDown_icon"></i>
              </div>
            </div>
          </div>

          <div className="py-3 px-4">
            {!show ? (
              <>
                <Emojipicker users={users} setText={setText} text={text} />
                <div className="mt-2">
                  <Addpost setShow={setShow} show={show} />
                </div>
                <div className="w-full mb-3">
                  <button
                    disabled
                    type="button"
                    className="w-full bg-[#E4E6EB] py-2 rounded-md text-base font-bold text-title_color"
                  >
                    Post
                  </button>
                </div>
              </>
            ) : (
              <>
                <Imageviewer
                  users={users}
                  setText={setText}
                  text={text}
                  setImages={setImages}
                  images={images}
                  setShow={setShow}
                  show={show}
                />
                <div className="mt-2">
                  <Addpost setShow={setShow} show={show} />
                </div>
                <div className="w-full mb-3">
                  <button
                    type="button"
                    className="w-full bg-blue py-2 rounded-md text-base font-bold text-white"
                  >
                    Post
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Postpopup;
