import React from "react";

const reactsEmoji = [
  {
    name: "like",
    image: "../../../reacts/like.gif",
  },

  {
    name: "love",
    image: "../../../reacts/love.gif",
  },

  {
    name: "haha",
    image: "../../../reacts/haha.gif",
  },

  {
    name: "angry",
    image: "../../../reacts/angry.gif",
  },

  {
    name: "wow",
    image: "../../../reacts/wow.gif",
  },

  {
    name: "sad",
    image: "../../../reacts/sad.gif",
  },
];

const Reacts = ({ setShowReacts, handleReacts }) => {
  return (
    <>
      <div
        className="show_reacts w-[310px] flex justify-between px-2 py-1 bg-page_color rounded-full absolute top-[-50px] left-[15px] z-[1] shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]"
        onMouseOver={() => {
          setTimeout(() => {
            setShowReacts(true);
          }, 500);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setShowReacts(false);
          }, 500);
        }}
      >
        {reactsEmoji.map((reacts, i) => (
          <img
            className="w-[45px] h-[45px] cursor-pointer scale-[1.5] hover:scale-[1.9] transition-all ease-linear duration-150"
            src={reacts.image}
            key={i}
            alt="reacts"
            onClick={() => handleReacts(reacts.name)}
          />
        ))}
      </div>
    </>
  );
};

export default Reacts;
