import React from "react";
import Photos from "./Photos";
import Friendslist from "./Friendslist";

const Profileleft = ({ users, username, friends, photo }) => {
  return (
    <div>
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
