import React from "react";
import Return from "../../../svg/return";

const Darkmode = ({ setVisible }) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div
            className="cursor-pointer w-[40px] h-[40px] rounded-full transition-all duration-200 ease-linear hover:bg-page_color flex items-center justify-center"
            onClick={() => {
              setVisible(0);
            }}
          >
            <Return color="#65676B" />
          </div>
          <div className="w-[80%]">
            <h3 className="font-primary text-2xl font-bold text-text_color">
              Display & Accesibility
            </h3>
          </div>
        </div>
        <div>
          <div className="flex justify-between mt-5 mb-2 cursor-pointer">
            <div className="w-[40px] h-[40px] rounded-full bg-page_color flex items-center justify-center">
              <i className="dark_filled_icon"></i>
            </div>
            <div className="ml-3 w-[230px]">
              <p className="font-primary text-lg font-medium leading-[0.8] text-text_color">
                Dark mode
              </p>
              <p className="font-primary text-sm text-secondary_color leading-[20px] mt-1">
                Adjust the appearence of SYE to reduce glare and give your eyes
                break.
              </p>
              <label
                htmlFor="off"
                className="radio cursor-pointer font-primary text-lg text-text_color flex justify-between items-center mt-3"
              >
                <span>Off</span>
                <input
                  className="radio-input"
                  name="mode"
                  id="off"
                  type="radio"
                />
                <div className="radio_radio"></div>
              </label>
              <label
                htmlFor="on"
                className="radio cursor-pointer font-primary text-lg text-text_color flex justify-between items-center mt-3"
              >
                <span>On</span>
                <input
                  className="radio-input"
                  name="mode"
                  id="on"
                  type="radio"
                />
                <div className="radio_radio"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-between mt-5 mb-2 cursor-pointer">
            <div className="w-[40px] h-[40px] rounded-full bg-page_color flex items-center justify-center">
              <i className="compact_icon"></i>
            </div>
            <div className="ml-3 w-[230px]">
              <p className="font-primary text-lg font-medium leading-[0.8] text-text_color">
                Compact mode
              </p>
              <p className="font-primary text-sm text-secondary_color leading-[20px] mt-1">
                Make your font size smaller so that more content can fit any
                screen
              </p>

              <label
                htmlFor="Coff"
                className="radio cursor-pointer font-primary text-lg text-text_color flex justify-between items-center mt-3"
              >
                <span>Off</span>
                <input
                  className="radio-input"
                  name="compact_mode"
                  id="Coff"
                  type="radio"
                />
                <div className="radio_radio"></div>
              </label>

              <label
                htmlFor="Con"
                className="radio cursor-pointer font-primary text-lg text-text_color flex justify-between items-center mt-3"
              >
                <span>On</span>
                <input
                  className="radio-input"
                  name="compact_mode"
                  id="Con"
                  type="radio"
                />
                <div className="radio_radio"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between my-2 cursor-pointer">
          <div className="w-[40px] h-[40px] rounded-full bg-page_color flex items-center justify-center">
            <i className="keyboard_icon"></i>
          </div>
          <div className="ml-3 w-[230px]">
            <p className="font-primary text-lg font-medium leading-[0.8] text-text_color">
              Keyboard
            </p>
          </div>
          <i className="right_icon"></i>
        </div>
      </div>
    </>
  );
};

export default Darkmode;
