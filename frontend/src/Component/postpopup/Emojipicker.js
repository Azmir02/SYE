import React, { useRef, useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";

const Emojipicker = ({
  users,
  setText,
  text,
  changepart,
  setBackground,
  background,
}) => {
  const [picker, setPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  const [show, setShow] = useState(false);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  const handleEmoji = ({ emoji }, e) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + emoji.length);
  };

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const postBackground = [
    "../../../images/postBackgrounds/1.jpg",
    "../../../images/postBackgrounds/2.jpg",
    "../../../images/postBackgrounds/3.jpg",
    "../../../images/postBackgrounds/4.jpg",
    "../../../images/postBackgrounds/5.jpg",
    "../../../images/postBackgrounds/6.jpg",
    "../../../images/postBackgrounds/7.jpg",
    "../../../images/postBackgrounds/8.jpg",
    "../../../images/postBackgrounds/9.jpg",
    "../../../images/postBackgrounds/10.jpg",
  ];

  const handleBackground = (i) => {
    bgRef.current.style.backgroundImage = `url(${postBackground[i]})`;
    setBackground(postBackground[i]);
    bgRef.current.classList.add("bgPost");
    textRef.current.focus();
  };

  const removeBackground = () => {
    bgRef.current.style.backgroundImage = "";
    setBackground("");
    bgRef.current.classList.remove("bgPost");
    textRef.current.focus();
  };

  return (
    <div className={`${changepart && "flex justify-between items-start"}`}>
      <div
        ref={bgRef}
        className="min-h-[90px] relative flex items-center justify-center"
      >
        <textarea
          ref={textRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`${
            !changepart
              ? "resize-none focus:outline-none w-full text-2xl py-3 px-4"
              : "resize-none focus:outline-none text-base py-3 px-6 w-[444px]"
          }`}
          style={{
            paddingTop: `${
              background
                ? Math.abs(textRef.current.value.length * 0.1 - 25)
                : "0"
            }%`,
          }}
          placeholder={`What's on your mind ${users.fName} ${users.lName}?`}
        />
      </div>

      <div className="flex items-center justify-between py-3 px-4">
        {!changepart && !show && (
          <div className="w-[40px]">
            <img
              className="w-full cursor-pointer"
              src="../../../icons/colorful.png"
              alt="globe"
              onClick={() => setShow((prev) => !prev)}
            />
          </div>
        )}
        {show ? (
          <div className="w-[30px] h-[30px] bg-[#E4E6EB] rounded-md cursor-pointer flex items-center justify-center">
            <i
              className="right_icon rotate-180 cursor-pointer"
              src="../../../icons/colorful.png"
              alt="globe"
              onClick={() => setShow((prev) => !prev)}
            />
          </div>
        ) : (
          ""
        )}

        {!changepart && show && (
          <div className="flex gap-[6px]">
            <div
              className="w-[30px] h-[30px] bg-[#E4E6EB] border border-solid border-white shadow-[-3px_4px_12px_0px_rgba(219,219,219,0.75)] rounded-md cursor-pointer"
              onClick={() => removeBackground()}
            ></div>
            {postBackground.map((item, i) => (
              <img
                className="w-[30px] h-[30px] object-cover rounded-md cursor-pointer"
                src={item}
                key={i}
                alt="postBackground"
                onClick={() => handleBackground(i)}
              />
            ))}
          </div>
        )}

        <div className="relative">
          <i
            className={`${
              !changepart ? "emoji_icon_large" : "emoji_icon_large mt-2"
            }`}
            onClick={() => setPicker((prev) => !prev)}
          ></i>
          {picker && (
            <div
              className={`${
                !changepart
                  ? "absolute top-[-460px] right-[-100px] shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]"
                  : "absolute bottom-[-450px] right-[-100px] shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] z-[999]"
              }`}
            >
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Emojipicker;
