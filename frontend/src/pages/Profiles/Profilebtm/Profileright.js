import React from "react";
import Post from "../../../Component/Posts/Post";
import Gridpost from "./Gridpost";
import HashLoader from "react-spinners/HashLoader";

const Profileright = ({ profile, setVisible, users, visitor, loading }) => {
  return (
    <>
      {!visitor && (
        <div>
          <Post profile setVisible={setVisible} loading={loading} />
        </div>
      )}

      <div>
        {loading ? (
          <div className="mt-5">
            <HashLoader
              className="m-auto"
              color="#21d997"
              loading={loading}
              size={50}
            />
          </div>
        ) : (
          <Gridpost profile={profile} users={users} />
        )}
      </div>
    </>
  );
};

export default Profileright;
