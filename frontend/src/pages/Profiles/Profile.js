import React, { useEffect, useReducer, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Component/Header/Header";
import { getprofilereducer } from "../../functions/getPost";
import Coverphoto from "./Coverphoto/Coverphoto";
import Profilebottom from "./Profilebtm/Profilebottom";
import Profileinfos from "./Profilepictureinfo";
import Postpopup from "../../Component/postpopup/Postpopup";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Profile = () => {
  const user = useSelector((users) => users.login.loggedin);
  const [photo, setPhoto] = useState({});
  const [visible, setVisible] = useState(false);
  const [othername, setOthername] = useState();
  const { username } = useParams();
  const profileTop = useRef(null);
  const [height, setHeight] = useState();
  const [scrollheight, setScrollHeight] = useState();
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

  useEffect(() => {
    setOthername(profile?.details?.othername);
  }, [profile]);

  // Dynamic height function
  useEffect(() => {
    setHeight(profileTop.current.clientHeight + 80);
    window.addEventListener("scroll", getScroll, { passive: true });
  }, [scrollheight]);

  let check = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const getScroll = () => {
    setScrollHeight(window.pageYOffset);
  };
  return (
    <div>
      <Helmet>
        <title>{`${profile.fName} ${profile.lName} | SYE`}</title>
      </Helmet>
      <Header />
      {visible && (
        <Postpopup
          setVisible={setVisible}
          posts={profile?.posts}
          dispatch={dispatch}
          profiles
        />
      )}
      <div className="bg-page_color">
        <div className="lg:pt-[100px] pt-[50px] pb-[10px]">
          <div className="2xl:px-[150px] 3xl:px-[300px] px-0">
            <div ref={profileTop}>
              {loading ? (
                <>
                  <div className="h-[450px]">
                    <Skeleton
                      height="100%"
                      containerClassName="avatar-skeleton"
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </div>
                  <div className="w-[150px] h-[150px]  rounded-full bg-cover bg-no-repeat border-4 border-solid border-white translate-y-[-60%] translate-x-[-50%] absolute left-[50%] z-[1] overflow-hidden">
                    <Skeleton
                      height="100%"
                      containerClassName="avatar-skeleton"
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
            <div>
              <Profilebottom
                profile={profile}
                setVisible={setVisible}
                users={user}
                visitor={visitor}
                username={userName}
                friends={profile.friends}
                photo={photo}
                setOthername={setOthername}
                getScroll={getScroll}
                scrollheight={scrollheight}
                check={check}
                height={height}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
