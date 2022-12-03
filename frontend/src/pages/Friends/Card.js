import React from "react";
import { Link } from "react-router-dom";
import {
  acceprequest,
  cancelrequest,
  deleterequest,
} from "../../functions/Userfriens";

const Card = ({ user, type, token, getData }) => {
  // Cancle Request
  const cancleRequestHandler = async (userId) => {
    const res = await cancelrequest(userId, token);
    if (res === "done") {
      getData();
    }
  };

  // Accept Request
  const confirmHandler = async (userId) => {
    const res = await acceprequest(userId, token);
    if (res === "done") {
      getData();
    }
  };

  // Delete Request
  const handleDelete = async (userId) => {
    const res = await deleterequest(userId, token);
    if (res === "done") {
      getData();
    }
  };
  return (
    <div>
      {type === "request" || type === "sentrequest" ? (
        <div className="flex flex-wrap mt-3">
          <div className="w-[300px] bg-white flex flex-col 3xl:flex-row p-3 rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]">
            <Link to={`/profile/${user.username}`}>
              <div className="w-[50px] h-[50px] m-auto 3xl:m-0 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={user.profilePicture}
                  alt=""
                />
              </div>
            </Link>
            <div className="3xl:ml-3">
              <Link to={`/profile/${user.username}`}>
                <h4 className="font-primary font-medium capitalize text-center 3xl:text-start text-base xl:text-lg">
                  {user.fName} {user.lName}
                </h4>
              </Link>
              {type === "sentrequest" ? (
                <div className="3xl:text-start text-center">
                  <button
                    className="font-primary text-sm text-white font-normal bg-blue px-3 py-2 rounded-md mt-2"
                    onClick={() => cancleRequestHandler(user._id)}
                  >
                    Cancle Request
                  </button>
                </div>
              ) : type === "request" ? (
                <div className="text-center 3xl:text-start">
                  <button
                    className="font-primary text-sm text-white font-normal bg-blue px-3 py-2 rounded-md mt-2"
                    onClick={() => confirmHandler(user._id)}
                  >
                    Confirm
                  </button>
                  <button
                    className="font-primary text-sm text-white font-normal bg-blue px-3 py-2 rounded-md mt-2 ml-1 3xl:ml-2"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <Link to={`/profile/${user.username}`}>
          <div className="w-full bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] p-3 ">
            <div className="w-full h-[200px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
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
