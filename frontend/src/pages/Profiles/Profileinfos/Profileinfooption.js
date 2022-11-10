import axios from "axios";
import React, { useEffect, useState } from "react";
import Editbio from "./Editbio";

const Profileinfooption = ({ userDtails, users, visitor }) => {
  const [details, setDetails] = useState(userDtails);
  const initial = {
    bio: details?.bio ? details.bio : "",
    othername: details?.othername ? details.othername : "",
    job: details?.job ? details.job : "",
    workplace: details?.workplace ? details.workplace : "",
    hometown: details?.hometown ? details.hometown : "",
    currentcity: details?.currentcity ? details.currentcity : "",
    college: details?.college ? details.college : "",
    highschool: details?.highschool ? details.highschool : "",
    instagram: details?.instagram ? details.instagram : "",
  };
  const [infos, setInfos] = useState(initial);
  const [showBio, setShowBio] = useState(false);
  const [max, setMax] = useState(100);

  const handleBio = (e) => {
    setInfos({ ...infos, bio: e.target.value });
    setMax(100 - e.target.value.length);
  };

  const handleEdit = async () => {
    try {
      let { data } = await axios.put(
        "/api/updatedetails",
        {
          infos,
        },
        {
          headers: {
            Authorization: `Bearer ${users.token}`,
          },
        }
      );
      setShowBio(false);
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setDetails(userDtails);
  }, [userDtails]);
  return (
    <div>
      <div className="text-center">
        {!showBio && (
          <span className="text-title_color font-primary text-lg font-medium block">
            {details?.bio && <span>{details?.bio}</span>}
          </span>
        )}
        {showBio && (
          <Editbio
            max={max}
            handleBio={handleBio}
            infos={infos}
            setShowBio={setShowBio}
            handleEdit={handleEdit}
          />
        )}
        {!visitor && (
          <button
            onClick={() => setShowBio(true)}
            className="bg-[#F7F7FB] w-full py-2 rounded-md mt-3 text-title_color font-normal text-base font-primary"
          >
            Edit Bio
          </button>
        )}
      </div>
      <div className="mt-3 flex items-center">
        <div className="w-[5%]">
          <img className="invert-[40%]" src="../../../icons/job.png" alt="" />
        </div>
        <div className="w-[95%]">
          <span className="text-title_color font-primary text-base font-normal block ml-2">
            {details?.job && details?.workplace ? (
              <span>
                Work as a <b>{details?.job}</b> at <b>{details?.workplace}</b>
              </span>
            ) : details?.job && !details?.workplace ? (
              <span>
                work as <b>{details?.job}</b>
              </span>
            ) : !details?.job && details?.workplace ? (
              <span>
                works at <b>{details?.workplace}</b>
              </span>
            ) : (
              "Add work place & job"
            )}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <div className="w-[5%]">
          <img className="invert-[40%]" src="../../../icons/home.png" alt="" />
        </div>
        <div className="w-[95%]">
          <span className="text-title_color font-primary text-base font-normal block ml-2">
            {details?.currentcity ? (
              <span>
                Lives in <b>{details?.currentcity}</b>
              </span>
            ) : (
              "Add Currentcity"
            )}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <div className="w-[5%]">
          <img className="invert-[40%]" src="../../../icons/home.png" alt="" />
        </div>
        <div className="w-[95%]">
          <span className="text-title_color font-primary text-base font-normal block ml-2">
            {details?.hometown ? (
              <span>
                From <b>{infos.hometown}</b>
              </span>
            ) : (
              "Add Hometown"
            )}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <div className="w-[5%]">
          <img
            className="invert-[40%]"
            src="../../../icons/studies.png"
            alt=""
          />
        </div>
        <div className="w-[95%]">
          <span className="text-title_color font-primary text-base font-normal block ml-2">
            {details?.college ? (
              <span>
                Studied at <b>{details?.college}</b>
              </span>
            ) : (
              "Add School or College"
            )}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <div className="w-[5%]">
          <img
            className="invert-[40%]"
            src="../../../icons/studies.png"
            alt=""
          />
        </div>
        <div className="w-[95%]">
          <span className="text-title_color font-primary text-base font-normal block ml-2">
            {details?.highschool ? (
              <span>
                Studied at <b>{details?.highschool}</b>
              </span>
            ) : (
              "Add Hightschool"
            )}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <div className="w-[5%]">
          <img
            className="invert-[40%]"
            src="../../../icons/instagram.png"
            alt=""
          />
        </div>
        <div className="w-[95%]">
          <span className="text-title_color font-primary text-base font-normal block ml-2">
            {details?.instagram ? (
              <a className="text-blue" href="https://www.instagram.com/">
                {details?.instagram}
              </a>
            ) : (
              "Add Instagram account"
            )}
          </span>
        </div>
      </div>
      {!visitor && (
        <button className="bg-[#F7F7FB] w-full py-2 rounded-md mt-3 text-title_color font-normal text-base font-primary">
          Edit Details
        </button>
      )}
    </div>
  );
};

export default Profileinfooption;
