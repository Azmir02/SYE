import React from "react";
import Plus from "../../svg/plus";
import Storyprsn from "./Storyprsn";
import { stories } from "../../data/Option";
import ArrowRight from "../../svg/arrowRight";
import { useMediaQuery } from "react-responsive";

const Story = () => {
  const media = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  const max = media ? 4 : stories.length;
  return (
    <div className="relative">
      <div className="grid grid-cols-5 lg:grid-cols-[repeat(6,1fr)] 2xl:grid-cols-[repeat(6,1fr)] gap-1 justify-between items-center">
        <div className="relative bg-white rounded-md group cursor-pointer shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] h-[190px]">
          <div className="w-full overflow-hidden rounded-tr-md rounded-tl-md h-[130px]">
            <img
              className="group-hover:scale-[1.02] transition-all ease-linear duration-300 w-full h-full object-cover"
              src="../../../images/default_pic.png"
              alt="default"
            />
          </div>
          <div className="w-[40px] h-[40px] bg-white rounded-full absolute bottom-[37px] left-2/4 translate-x-[-50%] flex items-center justify-center">
            <div className="w-[30px] h-[30px] bg-blue rounded-full flex items-center justify-center">
              <Plus color="#fff" />
            </div>
          </div>
          <div className="text-center py-4">
            <span className="font-primary text-[11px] md:text-sm text-black font-semibold">
              Crete Story
            </span>
          </div>
          <div className="absolute top-0 left-0 w-full h-full transition-all ease-out duration-100 group-hover:bg-[rgba(41,_49,_61,_.1)] rounded-md"></div>
        </div>
        {stories.slice(0, max).map((item, index) => (
          <div
            key={index}
            className="relative rounded-md group cursor-pointer shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] overflow-hidden"
          >
            <Storyprsn
              image={item.Image}
              profile_picture={item.profile_picture}
              profile_name={item.profile_name}
            />
            <div className="absolute top-0 left-0 w-full h-full transition-all ease-out duration-100 group-hover:bg-[rgba(41,_49,_61,_.2)] rounded-md"></div>
          </div>
        ))}
      </div>
      <div className="hidden lg:block">
        <div className="absolute top-[50%] right-[-20px] translate-y-[-50%] w-[40px] h-[40px] bg-white rounded-full shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] cursor-pointer flex items-center justify-center hover:bg-[#F1F4F7]">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Story;
