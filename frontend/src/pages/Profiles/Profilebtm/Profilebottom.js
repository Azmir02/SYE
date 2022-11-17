import React from "react";
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
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-4 mt-4">
      <div>
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
      <div>
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
