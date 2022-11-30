import React, { useCallback, useEffect, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import Public from "../../../svg/public";
import OutsideClick from "../../../helpers/click";
import { PulseLoader } from "react-spinners";
import getCroppedImg from "../../../helpers/getCroppedImg";
import { uploadIamge } from "../../../functions/UploadImages";
import { UploadCoverpicture } from "../../../functions/Coverpictureupload";
import { createPost } from "../../../functions/Createpost";
import { LoginUser } from "../../../features/users/loginUser";
import { useDispatch } from "react-redux";
import Oldcover from "./Oldcover";

const Coverphoto = ({ coverPhoto, visitor, user, photo }) => {
  const [showCovermenu, setShowCovermenu] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [coverPicture, setCoverPicture] = useState();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [width, setWidth] = useState();
  const coverWidth = useRef(null);
  const coverPictures = useRef(null);

  const dispatch = useDispatch();

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  const covermenuoption = useRef(null);
  const chooseCover = useRef(null);

  OutsideClick(covermenuoption, () => {
    setShowCovermenu(false);
  });

  useEffect(() => {
    setWidth(coverWidth.current.clientWidth);
  }, [window.innerWidth]);

  // upload Coverphoto
  const getCroppedImage = useCallback(
    async (show) => {
      try {
        const croppedimage = await getCroppedImg(
          coverPicture,
          croppedAreaPixels
        );
        if (show) {
          setCrop({ x: 0, y: 0 });
          setZoom(1);
          setCoverPicture(croppedimage);
        } else {
          return croppedimage;
        }
      } catch (error) {
        console.log(error.messasge);
      }
    },
    [croppedAreaPixels]
  );

  const handleCoverpicture = async () => {
    try {
      setLoading(true);
      const img = await getCroppedImage();
      const blob = await fetch(img).then((b) => b.blob());
      const path = `${user.username}/cover_picture`;
      const formData = new FormData();
      formData.append("path", path);
      formData.append("file", blob);
      const rescoverpic = await uploadIamge(formData, path, user.token);
      const uploadcoverpicture = await UploadCoverpicture(
        rescoverpic[0].url,
        user.token
      );
      if (uploadcoverpicture === "done") {
        setLoading(false);
        const coverpost = await createPost(
          "cover",
          rescoverpic,
          null,
          null,
          user.id,
          user.token
        );
        if (coverpost.status === "done") {
          setLoading(false);
          setCoverPicture("");
          coverPictures.current.src = `${rescoverpic[0].url}`;
          localStorage.setItem(
            "user",
            JSON.stringify({ ...user, cover: rescoverpic[0].url })
          );
          dispatch(LoginUser({ ...user, cover: rescoverpic[0].url }));
        } else {
          setError(coverpost);
        }
      } else {
        setError(uploadcoverpicture);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
    } else if (files.size > 1024 * 1024 * 10) {
      setError(
        `${files.name} is too large! please choose atleast under 10MB file.`
      );
      return;
    }
    const readFile = new FileReader();
    readFile.readAsDataURL(files);
    readFile.onload = (finishedRead) => {
      setCoverPicture(finishedRead.target.result);
    };
  };

  return (
    <>
      <div>
        <div
          className="bg-[#45437F] w-full h-[450px] rounded-t-md relative z-[1]"
          ref={coverWidth}
        >
          {coverPhoto && (
            <img
              src={coverPhoto}
              className="h-full object-cover w-full rounded-t-md"
              alt="coverPhoto"
              ref={coverPictures}
            />
          )}
          <input
            type="file"
            hidden
            accept="image/jpeg,image/png,image/webp,image/gif"
            ref={chooseCover}
            onChange={handleImageUpload}
          />
          <div className="cover_cropper">
            {coverPicture && (
              <Cropper
                image={coverPicture}
                crop={crop}
                zoom={zoom}
                showGrid={false}
                aspect={width / 450}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                objectFit="horizontal-cover"
              />
            )}
          </div>
          {error && (
            <div className="cover_err absolute top-0 left-0 w-full h-full bg-[rgba(255,_255,_255,_.9)] z-[-1] flex items-center justify-center">
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
          {visitor ? (
            ""
          ) : (
            <div
              className="absolute top-[80px] lg:top-[30px] right-[20px]"
              ref={covermenuoption}
            >
              <div
                className="w-[50px] md:w-[190px] bg-white rounded-md px-0 lg:px-2 py-3 flex items-center justify-center cursor-pointer hover:bg-[#F0F2F5]"
                onClick={() => setShowCovermenu((prev) => !prev)}
              >
                <i className="camera_filled_icon"></i>
                <span className="ml-3 leading-[0.8] font-primary text-sm lg:text-base font-medium text-black hidden md:block">
                  Upload Photo
                </span>
              </div>
              {showCovermenu && (
                <div className="w-[240px] bg-white p-2 absolute top-[50px] right-[0px] rounded-md z-[3] show_Covermenu shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]">
                  <div
                    className="flex items-center cursor-pointer hover:bg-[#F0F2F5] px-4 py-3 rounded-md"
                    onClick={() => setShow(true)}
                  >
                    <i className="photo_icon"></i>
                    <span className="ml-3 font-primary font-medium text-base text-black">
                      Select Photo
                    </span>
                  </div>
                  <div
                    className="flex items-center cursor-pointer hover:bg-[#F0F2F5] px-4 py-3 rounded-md"
                    onClick={() => chooseCover.current.click()}
                  >
                    <i className="upload_icon"></i>
                    <span className="ml-3 font-primary font-medium text-base text-black">
                      Upload Photo
                    </span>
                  </div>
                  <div className="w-full h-[1px] bg-[#E6E8EA] my-2"></div>
                  <div className="flex items-center cursor-pointer hover:bg-[#F0F2F5] px-4 py-3 rounded-md">
                    <i className="trash_icon"></i>
                    <span className="ml-3 font-primary font-medium text-base text-black">
                      Remove
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {coverPicture && (
          <div className="absolute top-[56px] lg:top-[62px] xl:top-[70px] left-0 w-full py-2 bg-[rgba(0,0,0,0.7)] z-[2] lg:px-[100px] ">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Public color="#fff" />
                <span className="text-base text-white font-primary font-normal ml-2">
                  Your cover photo is public
                </span>
              </div>
              <div>
                <button
                  className="px-4 py-2 bg-white rounded-md text-base font-primary text-black"
                  onClick={() => setCoverPicture("")}
                >
                  Cancle
                </button>
                <button
                  onClick={() => handleCoverpicture()}
                  disabled={loading}
                  className="px-4 py-2 bg-blue rounded-md text-base font-primary text-white ml-3"
                >
                  {loading ? <PulseLoader size={5} color="#fff" /> : "Save"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {show && (
        <Oldcover
          setShow={setShow}
          photo={photo}
          setCoverPicture={setCoverPicture}
        />
      )}
    </>
  );
};

export default Coverphoto;
