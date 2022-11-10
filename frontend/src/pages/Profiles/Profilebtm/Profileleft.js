import React from "react";
import Photos from "./Photos";
import Friendslist from "./Friendslist";
import ProfileInfos from "../Profileinfos/ProfileInfos";

const Profileleft = ({ users, username, friends, photo, profile, visitor }) => {
  return (
    <div>
      <div>
        <ProfileInfos details={profile} users={users} visitor={visitor} />
      </div>
      <div>
        <Photos photo={photo} />
      </div>
      <div>
        <Friendslist users={users} username={username} friends={friends} />
      </div>
    </div>
  );
};

export default Profileleft;
