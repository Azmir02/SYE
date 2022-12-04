import React, { useRef } from "react";
import OutsideClick from "../../../helpers/click";

const Oldcover = ({ setShow, photo, setCoverPicture }) => {
  const hideSelection = useRef(null);
  console.log(photo);

  OutsideClick(hideSelection, () => {
    setShow(false);
  });

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-screen bg-blur z-[999] flex items-center justify-center">
        <div
          className="w-[500px] md:w-[700px] h-[600px] bg-main_bg rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] relative main-menu overflow-y-auto pb-3"
          ref={hideSelection}
        >
          <div className="border-b border-solid border-[#F0F2F5] relative py-5">
            <div className="text-center">
              <h4 className="text-text_color font-primary text-xl font-bold">
                Recent Picture
              </h4>
            </div>
            <div
              className="w-[40px] h-[40px] bg-page_color flex items-center justify-center rounded-full absolute top-[50%] right-[15px] translate-y-[-50%] cursor-pointer"
              onClick={() => setShow(false)}
            >
              <i className="exit_icon"></i>
            </div>
          </div>
          <div className="flex items-center justify-center px-12 flex-wrap gap-1 mt-3">
            {photo.resources.map((photos) => (
              <img
                className="w-[110px] h-[110px] object-cover cursor-pointer"
                src={photos.secure_url}
                key={photos.public_id}
                alt="selectPhotos"
                onClick={() => setCoverPicture(photos.secure_url)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oldcover;
