import React, { useEffect, useRef, useState } from "react";
import Profileleft from "./Profileleft";
import Profileright from "./Profileright";

const Profilebottom = ({
  profile,
  setVisible,
  users,
  visitor,
  username,
  friends,
  photo,
  setOthername,
  getScroll,
  scrollheight,
  height,
  check,
}) => {
  const [leftheight, setLeftheight] = useState();
  const profileLeft = useRef(null);

  useEffect(() => {
    setLeftheight(profileLeft.current.clientHeight);
    window.addEventListener("scroll", getScroll, { passive: true });
  }, [scrollheight]);

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-4 mt-4 ${
        check && scrollheight >= height && leftheight > 1000
          ? "scrollFixed showless"
          : check &&
            scrollheight >= height &&
            leftheight < 1000 &&
            "scrollFixed showmore"
      }`}
    >
      <div className="profileLeft" ref={profileLeft}>
        <Profileleft
          users={users}
          username={username}
          friends={friends}
          photo={photo}
          profile={profile.details}
          visitor={visitor}
          setOthername={setOthername}
        />
      </div>
      <div className="profileright">
        <Profileright
          profile={profile}
          setVisible={setVisible}
          users={users}
          visitor={visitor}
        />
      </div>
    </div>
  );
};

export default Profilebottom;
