import React from "react";
import Post from "../../../Component/Posts/Post";
import Gridpost from "./Gridpost";

const Profileright = ({ profile, setVisible, users, visitor }) => {
  return (
    <>
      {!visitor && (
        <div>
          <Post profile setVisible={setVisible} />
        </div>
      )}

      <div>
        <Gridpost profile={profile} users={users} />
      </div>
    </>
  );
};

export default Profileright;
