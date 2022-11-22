import React from "react";
import { reactPosts } from "../../functions/Postsreact";

const reactsEmoji = [
  {
    name: "like",
    image: "../../../reacts/like.gif",
  },

  {
    name: "heart",
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

const Reacts = ({
  showReacts,
  setShowReacts,
  postsId,
  user,
  check,
  setCheck,
}) => {
  const handleReacts = async (type) => {
    try {
      reactPosts(postsId, type, user.token);
      if (check == type) {
        setCheck();
      } else {
        setCheck(type);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="show_reacts w-[310px] flex justify-between px-2 py-1 bg-white rounded-full absolute top-[-50px] left-[15px] z-[1] shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]"
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
