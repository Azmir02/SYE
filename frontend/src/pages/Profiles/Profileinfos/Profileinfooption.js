import React, { useState } from "react";

const Profileinfooption = ({ details }) => {
  const initial = {
    bio: details?.bio ? details.bio : "",
    othername: details?.othername ? details.othername : "",
  };
  const [infos, setinfos] = useState(initial);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Profileinfooption;
