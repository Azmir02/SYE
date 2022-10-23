import React, { useRef, useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Dots from "../../svg/dots";
import Reacts from "./Reacts";

const Showpost = ({ posts, user }) => {
  const [showReacts, setShowReacts] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  const [picker, setPicker] = useState(false);
  const [commentimages, setCommentimages] = useState("");
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const textRef = useRef(null);
  const chooseFile = useRef(null);

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
    } else if (files.size > 1024 * 1024 * 5) {
      setError(
        `${files.name} is too large! please choose atleast under 10MB file.`
      );
      return;
    }
    const readFile = new FileReader();
    readFile.readAsDataURL(files);
    readFile.onload = (finishedRead) => {
      setCommentimages(finishedRead.target.result);
    };
  };

  return (
    <div className="my-5 bg-white rounded-md pb-2">
      <div className="flex p-5 items-center justify-between">
        <div className="flex items-center w-[300px]">
          <div className="w-[50px] h-[50px] border-2 border-solid border-[#D9D9D9] rounded-full overflow-hidden">
            <Link to={`/profile/${posts.user.username}`}>
              <img
                className="w-full h-full object-cover"
                src={posts.user.profilePicture}
                alt="profile"
              />
            </Link>
          </div>
          <div className="w-[200px] ml-3">
            <h4 className="font-primary font-medium text-black capitalize text-lg leading-[0.8]">
              <Link to={`/profile/${posts.user.username}`}>
                {posts.user.fName} {posts.user.lName}
              </Link>
              {posts.type === "profilePicture" &&
                `update${
                  posts.user.gender === "male" ? "his" : "her"
                } profile picture`}
              {posts.type === "cover" &&
                `update${
                  posts.user.gender === "male" ? "his" : "her"
                } cover photo`}
            </h4>
            <span className="font-primary font-regular text-title_color text-sm ">
              <Moment fromNow interval={30}>
                {posts.createdAt}
              </Moment>
            </span>
          </div>
        </div>
        <div className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center transition-all duration-100 ease-linear hover:bg-[#f2f2f2] rounded-full">
          <Dots color="#29313D" />
        </div>
      </div>
      {posts.background ? (
        <div
          className="h-[350px] grid p-5 place-items-center text-center"
          style={{
            backgroundImage: `url(${posts.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <h4 className="text-white font-primary text-[35px] font-bold">
            {posts.text}
          </h4>
        </div>
      ) : (
        <>
          <h4 className="text-black font-primary text-lg font-normal px-5 mb-3">
            {posts.text}
          </h4>
          {posts.images && posts.images.length && (
            <div
              className={`relative cursor-pointer ${
                posts.images.length === 1
                  ? "overflow-hidden w-full h-full"
                  : posts.images.length === 2
                  ? "overflow-hidden grid grid-cols-2 gap-1"
                  : posts.images.length === 3
                  ? "massonary overflow-hidden grid grid-cols-2 gap-1"
                  : posts.images.length === 4
                  ? "massonary2 overflow-hidden grid grid-cols-2 gap-1"
                  : posts.images.length >= 5
                  ? "overflow-hidden grid grid-cols-2 gap-1"
                  : "overflow-hidden"
              }`}
            >
              {posts.images.slice(0, 4).map((item, i) => (
                <img
                  className="w-full h-[200px] md:h-[380px] object-cover"
                  src={item.url}
                  key={i}
                  alt="postImage"
                />
              ))}
              <div className="absolute top-[69%] right-[20%]">
                {posts.images.length >= 5 && (
                  <span className="font-medium text-black text-[22px] md:text-[40px] w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-[rgba(255,_255,_255,_0.8)] rounded-full flex items-center justify-center">
                    +{posts.images.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}
        </>
      )}
      <div className="mt-3 flex px-5 py-3 items-center justify-between border-y border-solid border-[#F0F2F5] w-full">
        <div className="w-[40%]">reacts</div>
        <div className="w-[50%] md:w-[40%] text-right">
          <span className="font-primary text-title_color text-base mr-3 cursor-pointer">
            2 comments
          </span>
          <span className="font-primary text-title_color text-base cursor-pointer">
            1 share
          </span>
        </div>
      </div>
      <div className="flex justify-between px-5 py-2 relative ">
        <div
          className="flex items-center justify-center cursor-pointer w-[200px] py-2 hover:bg-[#F0F2F5] hover:rounded-md transition-all ease-linear duration-150"
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
          <i className="like_icon"></i>
          <span className="font-primary text-title_color text-base ml-2">
            Like
          </span>
        </div>
        {showReacts && (
          <Reacts showReacts={showReacts} setShowReacts={setShowReacts} />
        )}
        <div className="flex items-center justify-center cursor-pointer w-[200px] hover:bg-[#F0F2F5] hover:rounded-md transition-all ease-linear duration-150">
          <i className="comment_icon"></i>
          <span className="font-primary text-title_color text-base ml-2">
            Comment
          </span>
        </div>
        <div className="flex items-center justify-center cursor-pointer w-[200px] hover:bg-[#F0F2F5] hover:rounded-md transition-all ease-linear duration-150">
          <i className="share_icon"></i>
          <span className="font-primary text-title_color text-base ml-2">
            Share
          </span>
        </div>
      </div>

      <div className="pt-2 border-t border-solid border-[#F0F2F5] ">
        {commentimages && (
          <div className="w-[180px] rounded-md overflow-hidden ml-[80px] ">
            <img
              src={commentimages}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        )}
      </div>

      <div className="py-2 px-5 relative">
        <div className="flex justify-between items-center">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden cursor-pointer">
            <img
              onClick={() => textRef.current.focus()}
              src={user?.profilePicture}
              alt=""
            />
          </div>
          <div className="w-[87%] flex items-center md:w-[92%] relative bg-[#F0F2F5] rounded-[50px]">
            <input
              type="file"
              hidden
              ref={chooseFile}
              onChange={handleImageUpload}
              accept="image/jpeg,image/png,image/webp,image/gif"
            />
            <input
              ref={textRef}
              type="text"
              className="w-[95%] py-2 pl-5 md:pr-[160px] rounded-[50px] outline-none placeholder:text-title_color bg-[#F0F2F5]"
              placeholder="Write a comment..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="flex items-center pr-2">
              <div
                className="w-[30px] h-[30px] hover:bg-[rgba(197,_199,_202,_.5)] transition-all duration-200 ease-linear rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setPicker((prev) => !prev)}
              >
                <i className="emoji_icon"></i>
              </div>
              <div
                className="cursor-pointer w-[30px] h-[30px] hover:bg-[rgba(197,_199,_202,_.5)] transition-all duration-200 ease-linear rounded-full flex items-center justify-center"
                onClick={() => chooseFile.current.click()}
              >
                <i className="camera_icon"></i>
              </div>
              <div className="cursor-pointer w-[30px] h-[30px] hover:bg-[rgba(197,_199,_202,_.5)] transition-all duration-200 ease-linear rounded-full flex items-center justify-center">
                <i className="gif_icon"></i>
              </div>
              <div className="cursor-pointer w-[30px] h-[30px] hover:bg-[rgba(197,_199,_202,_.5)] transition-all duration-200 ease-linear rounded-full flex items-center justify-center">
                <i className="sticker_icon"></i>
              </div>
            </div>
            {picker && (
              <div className="absolute z-[1] top-[-355px] right-[95px] ">
                <EmojiPicker
                  width={300}
                  height={350}
                  onEmojiClick={handleEmoji}
                />
              </div>
            )}
          </div>
        </div>
        {error && (
          <div className="authorize_err absolute top-0 left-0 w-full h-full bg-[rgba(255,_255,_255,_.9)] z-[9999] flex items-center justify-center">
            <div className="flex items-center gap-3 w-[80%] justify-between">
              <p className="text-red font-primary text-base font-regular w-[70%]">
                {error}
              </p>
              <button
                onClick={() => setError(false)}
                className="bg-blue hover:bg-[#1870d5] transition-all ease-linear duration-100 px-3 py-2 rounded-md text-white font-primary text-base font-medium"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Showpost;

// onChange={(e) => setText(e.target.value)}
