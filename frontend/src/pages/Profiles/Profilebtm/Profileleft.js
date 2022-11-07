import React from "react";
import Photos from "./Photos";
import Friendslist from "./Friendslist";
import Profileinfooption from "../Profileinfos/Profileinfooption";

const Profileleft = ({ users, username, friends, photo, profile }) => {
  return (
    <div>
      <div>
        <Profileinfooption details={profile} />
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
