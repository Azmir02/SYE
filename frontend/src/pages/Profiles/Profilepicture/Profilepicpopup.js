import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import OutsideClick from "../../../helpers/click";
import Picturecropper from "./Picturecropper";

const Profilepicpopup = ({ setShow, uploadPhoto, photo }) => {
  const [error, setError] = useState("");
  const [images, setImages] = useState("");
  const user = useSelector((users) => users.login.loggedin);
  const chooseFile = useRef(null);
  const popUppic = useRef(null);

  OutsideClick(popUppic, () => {
    setShow(false);
  });
  const handleImageUpload = (e) => {
    const files = e.target.files[0];
    if (
      files.type !== "image/jpeg" &&
      files.type !== "image/png" &&
      files.type !== "image/webp" &&
      files.type !== "image/gif"
    ) {
      setError(
        `${files.name} unsopported file! onlye jpg,png,webp,gif file are supported`
      );
      return;
    } else if (files.size > 1024 * 1024 * 5) {
      setError(
        `${files.name} is too large! please choose atleast under 10MB file.`
      );
      return;
    }
    const readFile = new FileReader();
    readFile.readAsDataURL(files);
    readFile.onload = (finishedRead) => {
      setImages(finishedRead.target.result);
    };
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(255,255,255,0.8)] z-[999] flex items-center justify-center">
      <div ref={popUppic}>
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          hidden
          ref={chooseFile}
          onChange={handleImageUpload}
        />
        <div
          className={`${
            error
              ? "w-[500px] md:w-[700px] h-[600px] bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] relative main-menu overflow-y-hidden pb-3"
              : "w-[500px] md:w-[700px] h-[600px] bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] relative main-menu overflow-y-auto pb-3"
          }`}
        >
          <div className="border-b border-solid border-[#F0F2F5] relative py-5">
            <div className="text-center">
              <h4 className="text-black font-primary text-xl font-bold">
                Update Profile Picture
              </h4>
            </div>
            <div
              className="w-[40px] h-[40px] bg-[#F0F2F5] flex items-center justify-center rounded-full absolute top-[50%] right-[15px] translate-y-[-50%] cursor-pointer"
              onClick={() => setShow(false)}
            >
              <i className="exit_icon"></i>
            </div>
          </div>
          <div className="flex justify-center px-[30px] mt-5">
            <div
              className="w-[45%] flex items-center justify-center px-5 py-2 bg-blue rounded-md cursor-pointer"
              onClick={() => chooseFile.current.click()}
            >
              <i className="plus_icon invert"></i>
              <span className="text-white font-primary text-semibold text-base ml-2">
                Upload Image
              </span>
            </div>
            <div className="w-[45%] flex items-center justify-center px-5 py-2 bg-[#F0F2F5] rounded-md ml-5 cursor-pointer">
              <i className="frame_icon"></i>
              <span className="text-black font-primary text-semibold text-base ml-2">
                Add frame
              </span>
            </div>
          </div>
          <div className="px-5 mt-[30px]">
            <h4 className="text-xl font-primary font-semibold text-black">
              Profile pictures(
              {
                photo.filter(
                  (img) => img.folder === `${user.username}/profile_picture`
                ).length
              }
              )
            </h4>
            <div className="flex flex-wrap mt-3 gap-2">
              {photo
                .filter(
                  (img) => img.folder === `${user.username}/profile_picture`
                )
                .map((files, i) => (
                  <img
                    className="w-[100px] h-[100px] object-cover rounded-md cursor-pointer"
                    src={files.secure_url}
                    key={i}
                    alt="profilePicture"
                    onClick={() => setImages(files.secure_url)}
                  />
                ))}
            </div>
          </div>
          <div className="px-5 mt-[30px]">
            <h4 className="text-xl font-primary font-semibold text-black">
              Others pictures(
              {
                photo.filter(
                  (img) => img.folder !== `${user.username}/profile_picture`
                ).length
              }
              )
            </h4>
            <div className="flex flex-wrap mt-3 gap-2">
              {photo
                .filter(
                  (img) => img.folder !== `${user.username}/profile_picture`
                )
                .map((files, i) => (
                  <img
                    className="w-[100px] h-[100px] object-cover rounded-md cursor-pointer"
                    src={files.secure_url}
                    key={i}
                    alt="otherPicture"
                    onClick={() => setImages(files.secure_url)}
                  />
                ))}
            </div>
          </div>
          {error && (
            <div className="authorize_err absolute top-0 left-0 w-full h-full bg-[rgba(255,_255,_255,_.9)] z-[9999] flex items-center justify-center">
              <div className="text-center w-[300px] mx-auto">
                <p className="text-red font-primary text-base font-regular">
                  {error}
                </p>
                <button
                  onClick={() => setError(false)}
                  className="bg-blue hover:bg-[#1870d5] transition-all ease-linear duration-100 px-3 py-2 rounded-md text-white font-primary text-base font-medium mt-3"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
        {images && (
          <Picturecropper
            setImages={setImages}
            images={images}
            user={user}
            setError={setError}
            error={error}
            setShow={setShow}
            uploadPhoto={uploadPhoto}
          />
        )}
      </div>
    </div>
  );
};

export default Profilepicpopup;
