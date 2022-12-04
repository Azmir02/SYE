import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { createComment } from "../../functions/Createpost";
import { uploadIamge } from "../../functions/UploadImages";
import dataURItoBlob from "../../helpers/dataURItoBlob";

const Createcomment = ({
  user,
  error,
  setError,
  setCommentimages,
  commentimages,
  setComment,
  postId,
  text,
  setText,
}) => {
  const [cursorPosition, setCursorPosition] = useState();
  const [loading, setLoading] = useState(false);
  const [picker, setPicker] = useState(false);
  const chooseFile = useRef(null);
  const textRef = useRef(null);

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

  // for make comment
  const handleComment = async (e) => {
    if (e.key === "Enter") {
      if (commentimages !== "") {
        setLoading(true);
        const Images = dataURItoBlob(commentimages);
        const path = `${user.username}/post_images/${postId}`;
        let formData = new FormData();
        formData.append("path", path);
        formData.append("file", Images);
        const comment = await uploadIamge(formData, path, user.token);
        const response = await createComment(
          postId,
          text,
          comment[0].url,
          user.token
        );
        setLoading(false);
        setComment(response);
        setText("");
        setCommentimages("");
      } else {
        setLoading(true);
        const comment = await createComment(postId, text, null, user.token);
        setText("");
        setComment(comment);
        setCommentimages("");
        setLoading(false);
      }
    }
  };
  return (
    <>
      <div className="py-2 px-5 relative">
        <div className="flex justify-between items-center">
          <Link to="/profile">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden cursor-pointer">
              <img src={user?.profilePicture} alt="" />
            </div>
          </Link>
          <div className="w-[87%] flex items-center md:w-[92%] relative bg-page_color rounded-[50px]">
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
              className="w-[95%] py-2 pl-5 md:pr-[20px] text-text_color rounded-[50px] outline-none placeholder:text-title_color bg-page_color"
              placeholder="Write a comment..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyUp={handleComment}
            />
            <div className="mt-[5px] mr-2">
              <ClipLoader color="#5093F3" loading={loading} size={20} />
            </div>
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
              <div className="absolute z-[1] top-[-355px] right-[95px]">
                <EmojiPicker
                  width={300}
                  height={350}
                  onEmojiClick={handleEmoji}
                />
              </div>
            )}
          </div>
        </div>
        <div
          className={
            commentimages && "pt-4 mt-2 border-t border-solid border-[#F0F2F5]"
          }
        >
          {commentimages && (
            <div className="w-[180px] relative rounded-md ml-[80px]">
              <img
                src={commentimages}
                className="w-full h-full object-cover rounded-md"
                alt=""
              />
              <div
                className="absolute top-[-8px] right-[-11px] w-[30px] h-[30px] bg-[#F0F2F5] rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setCommentimages("")}
              >
                <i className="exit_icon"></i>
              </div>
            </div>
          )}
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
    </>
  );
};

export default Createcomment;
