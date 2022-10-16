import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import OutsideClick from "../../helpers/click";
import Addpost from "./Addpost";
import Emojipicker from "./Emojipicker";
import Imageviewer from "./Imageviewer";
import { PulseLoader } from "react-spinners";
import { createPost } from "../../functions/Createpost";
import Posterror from "./Posterror";
import dataURItoBlob from "../../helpers/dataURItoBlob";
import { uploadIamge } from "../../functions/UploadImages";

const Postpopup = ({ setVisible }) => {
  const user = useSelector((users) => users.login.loggedin);
  const closePopup = useRef(null);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [images, setImages] = useState([]);
  const [background, setBackground] = useState("");

  OutsideClick(closePopup, () => {
    setVisible(false);
  });

  const handlePost = async () => {
    if (background) {
      setLoading(true);
      const response = await createPost(
        null,
        null,
        text,
        background,
        user.id,
        user.token
      );
      setLoading(false);
      if (response === "done") {
        setBackground("");
        setText("");
        setVisible(false);
      } else {
        setError(response);
      }
    } else if (images && images.length) {
      setLoading(true);
      const postImages = images.map((item) => dataURItoBlob(item));
      const path = `${user.username}/post images`;
      let formData = new FormData();
      formData.append("path", path);
      postImages.forEach((img) => {
        formData.append("file", img);
      });
      const responseImage = await uploadIamge(formData, path, user.token);
      await createPost(null, responseImage, text, null, user.id, user.token);
      setLoading(false);
      setBackground("");
      setText("");
      setVisible(false);
    } else if (text) {
      setLoading(true);
      const response = await createPost(
        null,
        null,
        text,
        null,
        user.id,
        user.token
      );
      setLoading(false);
      if (response === "done") {
        setBackground("");
        setText("");
        setVisible(false);
      } else {
        setError(response);
      }
    } else {
      setError("Please choos a file");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[rgba(255,255,255,_0.8)] w-full fixed top-0 left-0 z-[9999]">
        <div
          className="w-[500px] bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] relative"
          ref={closePopup}
        >
          {error && <Posterror error={error} setError={setError} />}
          <div className="text-center py-5 border-b border-[#E4E6EB] border-solid">
            <h3 className="font-bold text-lg text-black">Create Post</h3>
            <div
              onClick={() => setVisible(false)}
              className="w-[40px] h-[40px] flex items-center justify-center bg-[#E4E6EB] rounded-full absolute top-[13px] right-[20px] cursor-pointer"
            >
              <i className="exit_icon"></i>
            </div>
          </div>
          <div className="py-3 px-4 flex items-center">
            <div className="w-[40px] h-[40px] bg-[#E4E6EB] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={user.profilePicture}
                alt="profilePicture"
              />
            </div>
            <div className="ml-3">
              <p className="font-semibold text-base text-black capitalize">
                {user.fName} {user.lName}
              </p>
              <div className="bg-[#E4E6EB] p-2 flex items-center justify-between rounded-md cursor-pointer">
                <img src="../../../icons/public.png" alt="globe" />
                <span className="text-black text-sm font-semibold leading-[0.8]">
                  public
                </span>
                <i className="arrowDown_icon"></i>
              </div>
            </div>
          </div>

          <div>
            {!show ? (
              <>
                <Emojipicker
                  users={user}
                  setText={setText}
                  text={text}
                  setBackground={setBackground}
                  background={background}
                />
                <div className="mt-2 px-4">
                  <Addpost setShow={setShow} show={show} />
                </div>
                <div className="w-full mb-3 py-3 px-4">
                  {text ? (
                    <button
                      type="button"
                      className="w-full bg-blue py-2 rounded-md text-base font-bold text-white"
                      onClick={handlePost}
                    >
                      {loading ? <PulseLoader color="#fff" size={5} /> : "Post"}
                    </button>
                  ) : (
                    <button
                      disabled
                      type="button"
                      className="w-full bg-[#E4E6EB] py-2 rounded-md text-base font-bold text-title_color"
                    >
                      Post
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                <Imageviewer
                  users={user}
                  setText={setText}
                  text={text}
                  setImages={setImages}
                  images={images}
                  setShow={setShow}
                  show={show}
                  setError={setError}
                />
                <div className="mt-2 px-4">
                  <Addpost setShow={setShow} show={show} />
                </div>
                <div className="w-full mb-3 py-3 px-4">
                  <button
                    onClick={handlePost}
                    type="button"
                    className="w-full bg-blue py-2 rounded-md text-base font-bold text-white"
                  >
                    {loading ? <PulseLoader color="#fff" size={5} /> : "Post"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Postpopup;
