import React from "react";
import Profileinfooption from "./Profileinfooption";

const ProfileInfos = ({ details, users, visitor, setOthername }) => {
  return (
    <div className="bg-main_bg rounded-md w-full p-4 mt-5 shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]">
      <h4 className="font-primary text-xl text-text_color font-semibold">
        Details
      </h4>
      <div>
        <Profileinfooption
          userDtails={details}
          users={users}
          visitor={visitor}
          setOthername={setOthername}
        />
      </div>
    </div>
  );
};

export default ProfileInfos;
