import React, { useCallback, useRef, useState } from "react";
import Cropper from "react-easy-crop";

const Picturecropper = ({ setImages, images }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const zoomRange = useRef(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  const zoomIn = () => {
    zoomRange.current.stepUp();
    setZoom(zoomRange.current.value);
  };
  const zoomOut = () => {
    zoomRange.current.stepDown();
    setZoom(zoomRange.current.value);
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
        ></textarea>
      </div>
      <div className="mt-5 flex items-center justify-center relative w-full h-[400px]">
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
          className="w-[400px]"
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
    </div>
  );
};

export default Picturecropper;
