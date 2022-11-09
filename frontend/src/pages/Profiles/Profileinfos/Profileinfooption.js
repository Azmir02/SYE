import React, { useState } from "react";

const Profileinfooption = ({ details }) => {
  const initial = {
    bio: details?.bio ? details.bio : "Think Twice Code Once",
    othername: details?.othername ? details.othername : "",
    job: details?.job ? details.job : "Mern stack developer",
    workplace: details?.workplace ? details.workplace : "Google",
    hometown: details?.hometown ? details.hometown : "",
    currentcity: details?.currentcity ? details.currentcity : "",
    college: details?.college ? details.college : "",
    highschool: details?.highschool ? details.highschool : "",
    instagram: details?.instagram ? details.instagram : "",
  };
  const [infos, setinfos] = useState(initial);

  return (
    <div>
      <div className="text-center">
        <span className="text-title_color font-primary text-lg font-medium block">
          {infos.bio && <span>{infos.bio}</span>}
        </span>
        <button className="bg-[#F7F7FB] w-full py-2 rounded-md mt-3 text-title_color font-normal text-base font-primary">
          Edit Bio
        </button>
      </div>
      <div className="mt-3 flex items-center">
        <div>
          <img src="../../../icons/job.png" alt="" />
        </div>
        <div>
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
    </div>
  );
};

export default Profileinfooption;
