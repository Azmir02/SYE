import React from "react";
import Photos from "./Photos";
import Friendslist from "./Friendslist";

const Profileleft = ({ users, username, friends }) => {
  return (
    <div>
      <div>
        <Photos users={users} username={username} />
      </div>
      <div>
        <Friendslist users={users} username={username} friends={friends} />
      </div>
    </div>
  );
};

export default Profileleft;
