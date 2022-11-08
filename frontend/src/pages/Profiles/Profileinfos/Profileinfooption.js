import React, { useState } from "react";

const Profileinfooption = ({ details }) => {
  const initial = {
    bio: details?.bio ? details.bio : "Think Twice Code Once",
    othername: details?.othername ? details.othername : "",
    job: details?.job ? details.job : "",
    hometown: details?.hometown ? details.hometown : "",
    currentcity: details?.currentcity ? details.currentcity : "",
    workplace: details?.workplace ? details.workplace : "",
    college: details?.college ? details.college : "",
    highschool: details?.highschool ? details.highschool : "",
    instagram: details?.instagram ? details.instagram : "",
  };
  const [infos, setinfos] = useState(initial);

  return (
    <div>
      <div className="text-center">
        <span className="text-title_color font-primary text-lg font-medium block">
          {infos.bio && infos.bio}
        </span>
        <button className="bg-[#F7F7FB] w-full py-2 rounded-md mt-3 text-title_color font-normal text-base font-primary">
          Edit Bio
        </button>
      </div>
    </div>
  );
};

export default Profileinfooption;
