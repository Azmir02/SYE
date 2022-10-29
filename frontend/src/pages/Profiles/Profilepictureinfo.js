import React from "react";
import Profileinfooptions from "./Profileinfooptions";

const Profileinfos = ({ profile }) => {
  return (
    <>
      <div className="bg-white rounded-b-md pb-[18px]">
        <div className="text-center border-b border-solid border-[#F0F2F5]">
          <div className="relative inline-block cursor-pointer z-[1]">
            <div
              className="w-[150px] h-[150px] rounded-full bg-cover bg-no-repeat border-4 border-solid border-white translate-y-[-60%] translate-x-[-50%] absolute left-[50%]"
              style={{
                backgroundImage: `url(${profile.profilePicture})`,
              }}
            ></div>
            <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center absolute bottom-[-50px] right-[-75px]">
              <i className="camera_filled_icon"></i>
            </div>
          </div>
          <div className="xl:hidden mt-[60px] mb-[20px]">
            <div className="grid grid-cols-1 xl:grid-cols-3 items-center">
              <div className="mb-3">
                <h3 className="font-primary font-semibold text-2xl capitalize text-black">
                  {profile.fName} {profile.lName}
                </h3>
                <h4>designation</h4>
              </div>
              <div className="flex justify-center">
                <div>
                  <h4 className="font-primary font-semibold text-xl capitalize text-black">
                    930
                  </h4>
                  <span className="font-primary font-semibold text-base capitalize text-title_color">
                    friends
                  </span>
                </div>
                <div className="mx-[50px]">
                  <h4 className="font-primary font-semibold text-xl capitalize text-black">
                    87
                  </h4>
                  <span className="font-primary font-semibold text-base capitalize text-title_color">
                    posts
                  </span>
                </div>
                <div>
                  <h4 className="font-primary font-semibold text-xl capitalize text-black">
                    1k
                  </h4>
                  <span className="font-primary font-semibold text-base capitalize text-title_color">
                    followers
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end pr-5 xl:translate-y-[-100%]">
            <button className="flex items-center bg-blue px-5 py-3 rounded-md">
              <img src="../../../icons/plus.png" className="invert" alt="" />
              <span className="font-primary text-base text-white font-normal ml-2">
                Add to a story
              </span>
            </button>

            <button className="flex items-center bg-[#F0F2F5] px-5 py-3 rounded-md ml-3">
              <i className="edit_icon"></i>
              <span className="font-primary text-base text-black font-normal ml-2">
                Edit profile
              </span>
            </button>
          </div>
          <div className="mt-3 hidden xl:block mb-[18px]">
            <div className="grid grid-cols-3 items-center">
              <div className="flex justify-center">
                <div>
                  <h4 className="font-primary font-semibold text-xl capitalize text-black">
                    930
                  </h4>
                  <span className="font-primary font-semibold text-base capitalize text-title_color">
                    friends
                  </span>
                </div>
                <div className="mx-[50px]">
                  <h4 className="font-primary font-semibold text-xl capitalize text-black">
                    87
                  </h4>
                  <span className="font-primary font-semibold text-base capitalize text-title_color">
                    posts
                  </span>
                </div>
                <div>
                  <h4 className="font-primary font-semibold text-xl capitalize text-black">
                    1k
                  </h4>
                  <span className="font-primary font-semibold text-base capitalize text-title_color">
                    followers
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-primary font-semibold text-2xl capitalize text-black">
                  {profile.fName} {profile.lName}
                </h3>
                <h4>designation</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[18px] px-2 md:px-5">
          <Profileinfooptions />
        </div>
      </div>
    </>
  );
};

export default Profileinfos;
