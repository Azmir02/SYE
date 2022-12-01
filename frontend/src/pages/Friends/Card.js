import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user, type }) => {
  return (
    <div>
      {type === "request" || type === "sentrequest" ? (
        <div className="flex flex-wrap mt-3">
          <div className="w-[300px] bg-white flex p-3 rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]">
            <Link to={`/profile/${user.username}`}>
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={user.profilePicture}
                  alt=""
                />
              </div>
            </Link>
            <div className="ml-3">
              <Link to={`/profile/${user.username}`}>
                <h4 className="font-primary font-medium capitalize text-lg">
                  {user.fName} {user.lName}
                </h4>
              </Link>
              {type === "sentrequest" ? (
                <button className="font-primary text-sm text-white font-normal bg-blue px-3 py-2 rounded-md mt-2">
                  Cancle Request
                </button>
              ) : type === "request" ? (
                <>
                  <button className="font-primary text-sm text-white font-normal bg-blue px-3 py-2 rounded-md mt-2">
                    Confirm
                  </button>
                  <button className="font-primary text-sm text-white font-normal bg-blue px-3 py-2 rounded-md mt-2 ml-2">
                    Delete
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <Link to={`/profile/${user.username}`}>
          <div className="w-[200px] bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] p-3 ">
            <div className="w-full h-[200px] overflow-hidden">
              <img
                className="w-full h-[full] object-cover"
                src={user.profilePicture}
                alt=""
              />
            </div>
            <h4 className="font-primary font-medium capitalize text-xl mt-2">
              {user.fName} {user.lName}
            </h4>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Card;
