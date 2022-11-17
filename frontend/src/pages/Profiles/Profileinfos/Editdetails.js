import React from "react";
import Details from "./Details";

const Editdetails = ({ details, handlechange, updateDetails, infos }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(255,255,255,0.8)] z-[999] flex items-center justify-center">
      <div className="w-[500px] md:w-[700px] h-[800px] bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] relative main-menu overflow-y-auto pb-3">
        <div className="border-b border-solid border-[#F0F2F5] relative py-5">
          <div className="text-center">
            <h4 className="text-black font-primary text-xl font-bold">
              Edit your details
            </h4>
          </div>
          <div className="w-[40px] h-[40px] bg-[#F0F2F5] flex items-center justify-center rounded-full absolute top-[50%] right-[15px] translate-y-[-50%] cursor-pointer">
            <i className="exit_icon"></i>
          </div>
        </div>
        <div className="px-5 mt-3">
          <h3 className="text-black font-primary text-lg font-medium">
            Customize your details
          </h3>
          <div className="flex items-center">
            <img src="../../../icons/public.png" alt="" />
            <span className="text-title_color font-primary text-base font-medium ml-1">
              Your details is public now
            </span>
          </div>
        </div>
        <div className="mt-7 px-5">
          <h4 className="text-black font-primary text-xl font-medium">
            Other Name
          </h4>
          <Details
            text="Othername"
            img="home"
            placeholder="Add Othername"
            name="othername"
            value={details?.othername}
            updateDetails={updateDetails}
            handlechange={handlechange}
            infos={infos}
          />
        </div>
        <div className="mt-7 px-5">
          <h4 className="text-black font-primary text-xl font-medium">Work</h4>
          <Details
            text="Job"
            img="job"
            placeholder="Add Job"
            name="job"
            value={details?.job}
            updateDetails={updateDetails}
            handlechange={handlechange}
            infos={infos}
          />
          <Details
            text="Workplace Place"
            img="job"
            placeholder="Add Workplace Place"
            name="workplace"
            value={details?.workplace}
            updateDetails={updateDetails}
            handlechange={handlechange}
            infos={infos}
          />
        </div>
        <div className="mt-7 px-5">
          <h4 className="text-black font-primary text-xl font-medium">
            Education
          </h4>
          <Details
            text="Highschool"
            img="studies"
            placeholder="Add Highschool"
            name="highschool"
            value={details?.highschool}
            updateDetails={updateDetails}
            handlechange={handlechange}
            infos={infos}
          />
          <Details
            text="College"
            img="studies"
            placeholder="Add College"
            name="college"
            value={details?.college}
            updateDetails={updateDetails}
            handlechange={handlechange}
            infos={infos}
          />
        </div>
        <div className="mt-7 px-5">
          <h4 className="text-black font-primary text-xl font-medium">
            Current City
          </h4>
          <Details
            text="Currentcity"
            img="home"
            placeholder="Add Currentcity"
            name="currentcity"
            value={details?.currentcity}
            updateDetails={updateDetails}
            handlechange={handlechange}
            infos={infos}
          />
        </div>
        <div className="mt-7 px-5">
          <h4 className="text-black font-primary text-xl font-medium">
            Hometown
          </h4>
          <Details
            text="Hometown"
            img="home"
            placeholder="Add Hometown"
            name="hometown"
            value={details?.hometown}
            updateDetails={updateDetails}
            handlechange={handlechange}
            infos={infos}
          />
        </div>
      </div>
    </div>
  );
};

export default Editdetails;
