import React, { useRef } from "react";
import Emojipicker from "./Emojipicker";

const Imageviewer = ({
  users,
  setText,
  text,
  setImages,
  images,
  setShow,
  show,
  setError,
}) => {
  const chooseFile = useRef(null);

  const handleImageUpload = (e) => {
    let chooseFile = Array.from(e.target.files);
    chooseFile.forEach((img) => {
      if (
        img.type !== "image/jpeg" &&
        img.type !== "image/png" &&
        img.type !== "image/webp" &&
        img.type !== "image/gif"
      ) {
        chooseFile = chooseFile.filter((item) => item.name !== img.name);
        setError(
          `${img.name} unsopported file! onlye jpg,png,webp,gif file are supported`
        );
        return;
      } else if (img.size > 1024 * 1024 * 10) {
        chooseFile = chooseFile.filter((item) => item.name !== img.name);
        setError(
          `${img.name} is too large! please choose atleast under 10MB file.`
        );
        return;
      }
      const renderFiles = new FileReader();
      renderFiles.readAsDataURL(img);
      renderFiles.onload = (renderImage) => {
        setImages((images) => [...images, renderImage.target.result]);
      };
    });
  };

  const handleClose = () => {
    setShow(false);
    setImages([]);
  };
  return (
    <>
      <Emojipicker users={users} setText={setText} text={text} changepart />
      <div
        className={`${
          images &&
          images.length &&
          "overflow-y-auto main-menu h-[380px] overflow-x-hidden"
        }`}
      >
        <div className="border border-[#D5D7DA] border-solid rounded-md p-2 mx-4">
          <input
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            ref={chooseFile}
            onChange={handleImageUpload}
          />
          {images && images.length ? (
            <div className="relative">
              <div className="group">
                <div className="absolute top-[15px] left-[15px] hidden group-hover:block">
                  <div className="flex">
                    <button className="px-3 py-2 bg-white flex items-center rounded-md">
                      <i className="edit_icon"></i>
                      <span className="text-sm font-bold text-black ml-2">
                        Edit All
                      </span>
                    </button>
                    <button
                      className="px-3 py-2 bg-white flex items-center rounded-md ml-3"
                      onClick={() => chooseFile.current.click()}
                    >
                      <i className="addPhoto_icon"></i>
                      <span className="text-sm font-bold text-black ml-2">
                        Add photos/videos
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full border border-[#f2f2f2] border-solid cursor-pointer hover:bg-[#F2F2F2] absolute top-3 right-3"
                  onClick={handleClose}
                >
                  <i className="exit_icon"></i>
                </div>
                <div
                  className={`${
                    images.length === 1
                      ? "rounded-md overflow-hidden w-full h-full"
                      : images.length === 2
                      ? "rounded-md overflow-hidden grid grid-cols-2 gap-1"
                      : images.length === 3
                      ? "massonary rounded-md overflow-hidden grid grid-cols-2 gap-1"
                      : images.length === 4
                      ? "massonary2 rounded-md overflow-hidden grid grid-cols-2 gap-1"
                      : images.length >= 5
                      ? "rounded-md overflow-hidden grid grid-cols-2 gap-1"
                      : "rounded-md overflow-hidden"
                  }`}
                >
                  {images.slice(0, 4).map((item, i) => (
                    <img
                      className="w-full h-full object-cover"
                      src={item}
                      key={i}
                      alt="images"
                    />
                  ))}
                  <div className="absolute top-[460px] right-[83px]">
                    {images.length >= 5 && (
                      <span className="font-medium text-black text-[20px] w-[50px] h-[50px] bg-[rgba(255,_255,_255,_.9)] rounded-full flex items-center justify-center">
                        +{images.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center px-3 bg-[#F7F8FA] py-2 mt-2 mb-2 rounded-md">
                <div className="flex items-center">
                  <div className="w-[40px] h-[40px] bg-[#E4E6EB] rounded-full flex items-center justify-center cursor-pointer">
                    <i className="phone_icon"></i>
                  </div>
                  <span className="text-[13px] text-black ml-3">
                    Add photos and videos from your mobile device.
                  </span>
                </div>
                <button
                  className="px-3 py-2 bg-[#EAEBED] rounded-md text-base font-semibold hover:bg-[#E4E6EB]"
                  type="button"
                >
                  Add
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="relative">
                <div
                  className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full border border-[#f2f2f2] border-solid cursor-pointer hover:bg-[#F2F2F2] absolute top-3 right-3"
                  onClick={() => setShow(false)}
                >
                  <i className="exit_icon"></i>
                </div>
                <div
                  className="bg-[#f9f9f9] rounded-md p-5 h-[250px] flex items-center justify-center cursor-pointer hover:bg-[#EAEBED]"
                  onClick={() => chooseFile.current.click()}
                >
                  <div className="text-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#D8DADF] rounded-full m-auto">
                      <i className="addPhoto_icon"></i>
                    </div>
                    <div className="mt-3">
                      <span className="font-semibold text-lg text-black block leading-[0.8]">
                        Add photos/videos
                      </span>
                      <span className="font-regular text-sm text-title_color leading-[0.8]">
                        or drag and drop
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center px-3 bg-[#F7F8FA] py-2 mt-2 mb-2 rounded-md">
                <div className="flex items-center">
                  <div className="w-[40px] h-[40px] bg-[#E4E6EB] rounded-full flex items-center justify-center cursor-pointer">
                    <i className="phone_icon"></i>
                  </div>
                  <span className="text-[13px] text-black ml-3">
                    Add photos and videos from your mobile device.
                  </span>
                </div>
                <button
                  className="px-3 py-2 bg-[#EAEBED] rounded-md text-base font-semibold hover:bg-[#E4E6EB]"
                  type="button"
                >
                  Add
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Imageviewer;
