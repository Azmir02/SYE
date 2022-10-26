import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getprofilereducer } from "../../functions/getPost";

const Profile = () => {
  const user = useSelector((users) => users.login.loggedin);
  const { username } = useParams();
  var userName = username === undefined ? user.username : username;
  const [{ loading, profile, error }, dispatch] = useReducer(
    getprofilereducer,
    {
      loading: false,
      profile: {},
      error: "",
    }
  );

  useEffect(() => {
    getUserProfile();
  }, [userName]);

  const getUserProfile = async () => {
    try {
      dispatch({
        type: "PROFILE_REQUEST",
      });
      const { data } = await axios.get(`/api/getuser/${userName}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      dispatch({
        type: "PROFILE_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "PROFILE_ERROR",
        payload: error.response.data.message,
      });
      console.log(error);
    }
  };

  console.log(profile);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Profile;
