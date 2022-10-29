import React from "react";
import Post from "../../../Component/Posts/Post";

const Profileright = ({ profile }) => {
  return (
    <>
      <div>
        <Post profile={profile} />
      </div>
    </>
  );
};

export default Profileright;
