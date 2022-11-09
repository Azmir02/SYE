import React, { useState } from "react";
import Editbio from "./Editbio";

const Profileinfooption = ({ details }) => {
  const initial = {
    bio: details?.bio ? details.bio : "Think Twice Code Once",
    othername: details?.othername ? details.othername : "",
    job: details?.job ? details.job : "Mern stack developer",
    workplace: details?.workplace ? details.workplace : "Google",
    hometown: details?.hometown ? details.hometown : "Bangladesh",
    currentcity: details?.currentcity
      ? details.currentcity
      : "Dhaka,Bangladesh",
    college: details?.college ? details.college : "",
    highschool: details?.highschool ? details.highschool : "",
    instagram: details?.instagram ? details.instagram : "mr.c_r_o_o_k",
  };
  const [infos, setinfos] = useState(initial);
  const [showBio, setShowBio] = useState(true);

  return (
    <div>
      <div className="text-center">
        {!showBio && (
          <span className="text-title_color font-primary text-lg font-medium block">
            {infos.bio && <span>{infos.bio}</span>}
          </span>
        )}
        {showBio && <Editbio />}
        <button className="bg-[#F7F7FB] w-full py-2 rounded-md mt-3 text-title_color font-normal text-base font-primary">
          Edit Bio
        </button>
      </div>
      <div className="mt-3 flex items-center">
        <div className="w-[5%]">
          <img className="invert-[40%]" src="../../../icons/job.png" alt="" />
        </div>
        <div className="w-[95%]">
          <span className="text-title_color font-primary text-base font-normal block ml-2">
            {infos.job && infos.workplace ? (
              <span>
                Work as a <b>{infos.job}</b> at <b>{infos.workplace}</b>
              </span>
            ) : infos.job && !infos.workplace ? (
              <span>
                work as <b>{infos.job}</b>
              </span>
            ) : !infos.job && infos.workplace ? (
              <span>
                works at <b>{infos.workplace}</b>
              </span>
            ) : (
              "Add work place & job"
            )}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <div className="w-[5%]">
          <img className="invert-[40%]" src="../../../icons/home.png" alt="" />
        </div>
        <div className="w-[95%]">
          <span className="text-title_color font-primary text-base font-normal block ml-2">
            {infos.currentcity ? (
              <span>
                Lives in <b>{infos.currentcity}</b>
              </span>
            ) : (
              "Add Currentcity"
            )}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <div className="w-[5%]">
          <img className="invert-[40%]" src="../../../icons/home.png" alt="" />
        </div>
        <div className="w-[95%]">
          <span className="text-title_color font-primary text-base font-normal block ml-2">
            {infos.hometown ? (
              <span>
                From <b>{infos.hometown}</b>
              </span>
            ) : (
              "Add Hometown"
            )}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <div className="w-[5%]">
          <img
            className="invert-[40%]"
            src="../../../icons/studies.png"
            alt=""
          />
        </div>
        <div className="w-[95%]">
          <span className="text-title_color font-primary text-base font-normal block ml-2">
            {infos.college ? (
              <span>
                Studied at <b>{infos.college}</b>
              </span>
            ) : (
              "Add School or College"
            )}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <div className="w-[5%]">
          <img
            className="invert-[40%]"
            src="../../../icons/studies.png"
            alt=""
          />
        </div>
        <div className="w-[95%]">
          <span className="text-title_color font-primary text-base font-normal block ml-2">
            {infos.highschool ? (
              <span>
                Studied at <b>{infos.highschool}</b>
              </span>
            ) : (
              "Add Hightschool"
            )}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <div className="w-[5%]">
          <img
            className="invert-[40%]"
            src="../../../icons/instagram.png"
            alt=""
          />
        </div>
        <div className="w-[95%]">
          <span className="text-title_color font-primary text-base font-normal block ml-2">
            {infos.instagram ? (
              <a className="text-blue" href="https://www.instagram.com/">
                {infos.instagram}
              </a>
            ) : (
              "Add Instagram account"
            )}
          </span>
        </div>
      </div>
      <button className="bg-[#F7F7FB] w-full py-2 rounded-md mt-3 text-title_color font-normal text-base font-primary">
        Edit Details
      </button>
    </div>
  );
};

export default Profileinfooption;
