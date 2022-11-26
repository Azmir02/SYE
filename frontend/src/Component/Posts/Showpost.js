import React, { useRef, useState, useEffect } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Dots from "../../svg/dots";
import Reacts from "./Reacts";
import Menu from "../UserMenulist/Menu";
import OutsideClick from "../../helpers/click";
import { getreactPosts, reactPosts } from "../../functions/Postsreact";
import Comment from "./Comment";
import Createcomment from "./Createcomment";

const Showpost = ({ posts, user }) => {
  const [showReacts, setShowReacts] = useState(false);
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [comment, setComment] = useState([]);
  const [count, setCount] = useState(1);
  const [commentimages, setCommentimages] = useState("");
  const [reacts, setReacts] = useState();
  const [total, setTotal] = useState();
  const [check, setCheck] = useState();
  const [error, setError] = useState("");
  const hideMenu = useRef(null);
  OutsideClick(hideMenu, () => {
    setVisible(false);
  });

  useEffect(() => {
    getReacts();
  }, [posts]);

  useEffect(() => {
    setComment(posts?.comments);
  }, [posts]);

  const getReacts = async () => {
    let res = await getreactPosts(posts._id, user.token);
    setReacts(res.reacts);
    setCheck(res.check);
    setTotal(res.total);
  };

  console.log(comment);
  const handleReacts = async (type) => {
    try {
      reactPosts(posts._id, type, user.token);
      if (check === type) {
        setCheck();
        let index = reacts.findIndex((x) => x.react === check);
        if (index !== -1) {
          setReacts([...reacts, (reacts[index].count = --reacts[index].count)]);
          setTotal((prev) => --prev);
        }
      } else {
        setCheck(type);
        let index = reacts.findIndex((x) => x.react === type);
        let index1 = reacts.findIndex((x) => x.react === check);
        if (index !== -1) {
          setReacts([...reacts, (reacts[index].count = ++reacts[index].count)]);
          setTotal((prev) => ++prev);
        }
        if (index1 !== -1) {
          setReacts([
            ...reacts,
            (reacts[index1].count = --reacts[index1].count),
          ]);
          setTotal((prev) => --prev);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // showMore comment
  const showMore = () => {
    setCount((prev) => prev + 3);
  };

  return (
    <div className="my-5 bg-white rounded-md pb-2">
      <div className="flex p-5 items-center justify-between">
        <div className="flex items-center w-[420px]">
          <div className="w-[50px] h-[50px] border-2 border-solid border-[#D9D9D9] rounded-full overflow-hidden mr-3">
            <Link to={`/profile/${posts.user.username}`}>
              <img
                className="w-full h-full object-cover"
                src={posts.user.profilePicture}
                alt="profile"
              />
            </Link>
          </div>
          <div className="w-[280px]">
            <h4 className="font-primary font-medium text-black capitalize text-lg leading-[0.8] inline-block">
              <Link to={`/profile/${posts.user.username}`}>
                {posts.user.fName} {posts.user.lName}
              </Link>
            </h4>
            <span className="font-primary font-normal text-title_color capitalize text-base leading-[0.8] ml-1">
              {posts.type === "profilePicture" &&
                `Update ${
                  posts.user.gender === "male" ? "his" : "her"
                } Profile Picture`}
              {posts.type === "cover" &&
                `Update${
                  posts.user.gender === "male" ? " his" : "her"
                } Cover Photo`}
            </span>
            <p className="font-primary font-regular text-title_color text-sm ">
              <Moment fromNow interval={30}>
                {posts.createdAt}
              </Moment>
            </p>
          </div>
        </div>
        <div className="relative" ref={hideMenu}>
          <div
            className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center transition-all duration-100 ease-linear hover:bg-[#f2f2f2] rounded-full"
            onClick={() => setVisible((prev) => !prev)}
          >
            <Dots color="#29313D" />
          </div>
          {visible && (
            <Menu
              user={user}
              posts={posts}
              images={posts.images}
              setVisible={setVisible}
            />
          )}
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
              {posts.type === "profilePicture" ? (
                <div>
                  <div>
                    <img src={posts.user.cover} alt="" />
                  </div>
                  <div className="w-[300px] h-[300px] overflow-hidden rounded-full mx-auto mt-[-168px]">
                    <img src={posts.user.profilePicture} alt="" />
                  </div>
                </div>
              ) : (
                posts.images
                  .slice(0, 4)
                  .map((item, i) => (
                    <img
                      className="w-full h-[200px] md:h-[380px] object-cover"
                      src={item.url}
                      key={i}
                      alt="postImage"
                    />
                  ))
              )}
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
        <div className="w-[40%] flex items-center">
          <div className="flex">
            {reacts &&
              reacts
                .sort((a, b) => {
                  return b.count - a.count;
                })
                .slice(0, 3)
                .map(
                  (react, i) =>
                    react.count > 0 && (
                      <img
                        key={i}
                        src={`../../../reacts/${react.react}.svg`}
                        alt=""
                        className="w-[20px]"
                      />
                    )
                )}
          </div>
          <div>
            <span className="font-primary text-title_color text-base ml-2">
              {total ? total : ""}
            </span>
          </div>
        </div>
        <div className="w-[50%] md:w-[40%] text-right">
          <span className="font-primary text-title_color text-base mr-3 cursor-pointer">
            2 comments
          </span>
          <span className="font-primary text-title_color text-base cursor-pointer">
            1 share
          </span>
        </div>
      </div>
      <div className="flex justify-between px-5 py-2 relative border-b border-solid border-[#F0F2F5]">
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
          onClick={() => handleReacts(check ? check : "like")}
        >
          {check ? (
            <img
              src={`../../../reacts/${check}.svg`}
              className="w-[20px]"
              alt=""
            />
          ) : (
            <i className="like_icon"></i>
          )}

          <span
            className={
              check === "like"
                ? "font-primary capitalize text-[#5093F3] text-base font-medium ml-2"
                : check === "love"
                ? "font-primary capitalize text-[#F54969] text-base font-medium ml-2"
                : check === "angry"
                ? "font-primary capitalize text-[#E54953] text-base font-medium ml-2"
                : check === "haha"
                ? "font-primary capitalize text-[#FBCC59] text-base font-medium ml-2"
                : check === "wow"
                ? "font-primary capitalize text-[#FBCC59] text-base font-medium ml-2"
                : check === "sad"
                ? "font-primary capitalize text-[#FBCC59] text-base ml-2"
                : "font-primary capitalize text-title_color text-base ml-2"
            }
          >
            {check ? check : "Like"}
          </span>
        </div>
        {showReacts && (
          <Reacts
            showReacts={showReacts}
            setShowReacts={setShowReacts}
            user={user}
            handleReacts={handleReacts}
          />
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

      <div>
        <div className="px-5 py-2">
          {comment &&
            comment
              .sort((a, b) => {
                return new Date(b.commentedAt) - new Date(a.commentedAt);
              })
              .slice(0, count)
              .map((comment, i) => <Comment comment={comment} key={i} />)}
          {count < comment.length && (
            <div
              className="font-primary text-title_color text-base cursor-pointer hover:underline"
              onClick={() => showMore()}
            >
              View more comments
            </div>
          )}
        </div>

        <Createcomment
          user={user}
          error={error}
          setError={setError}
          commentimages={commentimages}
          setCommentimages={setCommentimages}
          postId={posts._id}
          text={text}
          setText={setText}
        />
      </div>
    </div>
  );
};

export default Showpost;
