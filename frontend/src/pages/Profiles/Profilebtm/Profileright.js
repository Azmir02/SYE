import React from "react";
import Post from "../../../Component/Posts/Post";

const Profileright = ({ profile, setVisible }) => {
  return (
    <>
      <div>
        <Post profile={profile} setVisible={setVisible} />
      </div>
    </>
  );
};

export default Profileright;
