import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../Component/Header/Header";
import { getprofilereducer } from "../../functions/getPost";
import Coverphoto from "./Coverphoto";
import Profilebottom from "./Profilebtm/Profilebottom";
import Profileinfos from "./Profilepictureinfo";

const Profile = ({ setVisible }) => {
  const user = useSelector((users) => users.login.loggedin);
  const { username } = useParams();
  var userName = username === undefined ? user.username : username;
  const navigate = useNavigate();
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
      if (data.ok === false) {
        navigate("/");
      } else {
        dispatch({
          type: "PROFILE_SUCCESS",
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: "PROFILE_ERROR",
        payload: error.response.data.message,
      });
      console.log(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>{`${profile.fName} ${profile.lName} | SYE`}</title>
      </Helmet>
      <Header />
      <div className="bg-[#F7F7FB]">
        <div className="lg:pt-[100px] pt-[50px] pb-[100px]">
          <div className="lg:px-[100px] 2xl:px-[200px] 3xl:px-[300px] px-0">
            <Coverphoto coverPhoto={profile.cover} />
            <Profileinfos profile={profile} />
            <Profilebottom profile={profile} setVisible={setVisible} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
