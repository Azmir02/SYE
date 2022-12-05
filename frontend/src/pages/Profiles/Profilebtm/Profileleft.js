import React from "react";
import Photos from "./Photos";
import Friendslist from "./Friendslist";
import ProfileInfos from "../Profileinfos/ProfileInfos";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Profileleft = ({
  users,
  username,
  friends,
  photo,
  profile,
  visitor,
  setOthername,
  loading,
}) => {
  return (
    <div>
      <div>
        {loading ? (
          <div className="h-[445px]">
            <Skeleton
              height="100%"
              containerClassName="avatar-skeleton"
              baseColor="#202020"
              highlightColor="#444"
            />
          </div>
        ) : (
          <ProfileInfos
            details={profile}
            users={users}
            visitor={visitor}
            setOthername={setOthername}
          />
        )}
      </div>
      <div>
        <Photos photo={photo} loading={loading} />
      </div>
      <div>
        <Friendslist
          users={users}
          username={username}
          friends={friends}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Profileleft;
