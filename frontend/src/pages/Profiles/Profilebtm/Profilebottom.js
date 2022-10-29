import React from "react";
import Profileleft from "./Profileleft";
import Profileright from "./Profileright";

const Profilebottom = ({ profile, setVisible }) => {
  return (
    <div className="grid grid-cols-[2fr,3fr] gap-4 mt-4">
      <div>
        <Profileleft />
      </div>
      <div>
        <Profileright profile={profile} setVisible={setVisible} />
      </div>
    </div>
  );
};

export default Profilebottom;
