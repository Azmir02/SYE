import React, { useCallback, useEffect, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { createPost } from "../../../functions/Createpost";
import { UploadProfilepicture } from "../../../functions/Profilepicupload";
import { PulseLoader } from "react-spinners";
import { uploadIamge } from "../../../functions/UploadImages";
import getCroppedImg from "../../../helpers/getCroppedImg";
import { LoginUser } from "../../../features/users/loginUser";
import { useDispatch } from "react-redux";

const Picturecropper = ({
  setImages,
  images,
  user,
  setError,
  error,
  setShow,
  uploadPhoto,
}) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const dispatch = useDispatch();
  const [zoom, setZoom] = useState(1);
  const zoomRange = useRef(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const zoomIn = () => {
    zoomRange.current.stepUp();
    setZoom(zoomRange.current.value);
  };
  const zoomOut = () => {
    zoomRange.current.stepDown();
    setZoom(zoomRange.current.value);
  };

  const getCroppedImage = useCallback(
    async (show) => {
      try {
        const croppedimage = await getCroppedImg(images, croppedAreaPixels);
        if (show) {
          setCrop({ x: 0, y: 0 });
          setZoom(1);
          setImages(croppedimage);
        } else {
          return croppedimage;
        }
      } catch (error) {
        console.log(error.messasge);
      }
    },
    [croppedAreaPixels]
  );

  const handleProfilepicture = async () => {
    try {
      setLoading(true);
      const img = await getCroppedImage();
      const blob = await fetch(img).then((b) => b.blob());
      const path = `${user.username}/profile_picture`;
      const formData = new FormData();
      formData.append("path", path);
      formData.append("file", blob);
      const resprofilepic = await uploadIamge(formData, path, user.token);
      const uploadProfilepicture = await UploadProfilepicture(
        resprofilepic[0].url,
        user.token
      );
      if (uploadProfilepicture === "done") {
        setLoading(false);
        const profilepicpost = await createPost(
          "profilePicture",
          resprofilepic,
          text,
          null,
          user.id,
          user.token
        );
        if (profilepicpost.status === "done") {
          setShow(false);
          setLoading(false);
          uploadPhoto.current.style.backgroundImage = `url(${resprofilepic[0].url})`;
          localStorage.setItem(
            "user",
            JSON.stringify({ ...user, profilePicture: resprofilepic[0].url })
          );
          dispatch(
            LoginUser({ ...user, profilePicture: resprofilepic[0].url })
          );
        } else {
          setError(profilepicpost);
        }
      } else {
        setError(uploadProfilepicture);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[500px] md:w-[700px] h-[900px] bg-white shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-5 py-4 rounded-md">
      <div className="border-b border-solid border-[#F0F2F5] relative py-5">
        <div className="text-center">
          <h4 className="text-black font-primary text-xl font-bold">
            Update Profile Picture
          </h4>
        </div>
        <div
          className="w-[40px] h-[40px] bg-[#F0F2F5] flex items-center justify-center rounded-full absolute top-[50%] right-[15px] translate-y-[-50%] cursor-pointer"
          onClick={() => setImages("")}
        >
          <i className="exit_icon"></i>
        </div>
      </div>
      <div className="mt-5">
        <textarea
          className="w-full border border-solid border-[#F0F2F5] h-[100px] rounded-md bg-[#f7f7fb] resize-none px-5 py-4 focus:outline-none"
          placeholder="Description"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="mt-5 flex items-center justify-center relative w-full h-[400px] profile_cropper">
        <Cropper
          image={images}
          crop={crop}
          zoom={zoom}
          aspect={1 / 1}
          cropShape="round"
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div className="flex items-center justify-center mt-5">
        <div
          className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#F0F2F5] mr-2 rounded-full transition-all ease-linear duration-150 cursor-pointer"
          onClick={zoomOut}
        >
          <i className="minus_icon"></i>
        </div>
        <input
          value={zoom}
          min={1}
          max={3}
          step={0.2}
          ref={zoomRange}
          className="w-[400px] customize"
          type="range"
          onChange={(e) => setZoom(e.target.value)}
        />
        <div
          className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#F0F2F5] ml-2 rounded-full transition-all ease-linear duration-150 cursor-pointer"
          onClick={zoomIn}
        >
          <i className="plus_icon"></i>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="flex items-center bg-[#F0F2F5] px-4 py-2 rounded-md"
          onClick={() => getCroppedImage("show")}
        >
          <i className="crop_icon"></i>
          <span className="ml-2 font-primary text-medium text-base text-black">
            Crop Photo
          </span>
        </button>
        <button className="flex items-center bg-[#F0F2F5] px-4 py-2 rounded-md ml-3">
          <i className="temp_icon"></i>
          <span className="ml-2 font-primary text-medium text-base text-black">
            Make Temporary
          </span>
        </button>
      </div>
      <div className="mt-8 border-b border-solid border-[#F0F2F5] pb-5">
        <h4 className="font-primary text-medium text-lg text-black">
          Your Profile Is Public
        </h4>
      </div>
      <div className="flex justify-end items-center mt-5">
        <div>
          <button
            className="hover:bg-[#F0F2F5] px-5 py-2 rounded-md"
            onClick={() => setImages("")}
          >
            <span className="font-primary text-normal text-base text-blue">
              cancle
            </span>
          </button>
          <button
            className="px-5 py-2 bg-blue rounded-md ml-3"
            onClick={() => handleProfilepicture()}
            disabled={loading}
          >
            {loading ? (
              <PulseLoader size={5} color="#fff" />
            ) : (
              <span className="font-primary text-normal text-base text-white">
                Save
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Picturecropper;
