import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../Component/Header/Header";
import { getprofilereducer } from "../../functions/getPost";
import Coverphoto from "./Coverphoto/Coverphoto";
import Profilebottom from "./Profilebtm/Profilebottom";
import Profileinfos from "./Profilepictureinfo";

const Profile = ({ setVisible }) => {
  const user = useSelector((users) => users.login.loggedin);
  const [photo, setPhoto] = useState({});
  const [othername, setOthername] = useState();
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

  const path = `${userName}/*`;
  const sort = "desc";
  const max = 30;

  var visitor = userName !== user.username ? true : false;
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
        // for all and profile picture
        try {
          const images = await axios.post(
            `/api/listimage`,
            { path, sort, max },
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
          setPhoto(images.data);
        } catch (error) {
          console.log(error);
        }
        setOthername(data);
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
    }
  };

  return (
    <div>
      <Helmet>
        <title>{`${profile.fName} ${profile.lName} | SYE`}</title>
      </Helmet>
      <Header />
      <div className="bg-[#F7F7FB]">
        <div className="lg:pt-[100px] pt-[50px] pb-[10px]">
          <div className="2xl:px-[150px] 3xl:px-[300px] px-0">
            <Coverphoto
              coverPhoto={profile.cover}
              visitor={visitor}
              user={user}
              profile={profile}
              photo={photo}
            />
            <Profileinfos
              photo={photo.resources}
              profile={profile}
              visitor={visitor}
              othername={othername}
            />
            <Profilebottom
              profile={profile}
              setVisible={setVisible}
              users={user}
              visitor={visitor}
              username={userName}
              friends={profile.friends}
              photo={photo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
