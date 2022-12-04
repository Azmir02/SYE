import React, { useState } from "react";
import { removeposts, SavedPost } from "../../functions/Createpost";
import { saveAs } from "file-saver";
import Menuitem from "./Menuitem";

const Menu = ({
  user,
  posts,
  images,
  setCheckSavePost,
  checkSavePost,
  postBody,
}) => {
  const [test, setTest] = useState(user.id === posts.user._id ? true : false);

  const savePosts = async () => {
    SavedPost(posts._id, user.token);
    if (checkSavePost) {
      setCheckSavePost(false);
    } else {
      setCheckSavePost(true);
    }
  };

  // for download post images
  const handleDownload = async () => {
    posts.images.map((image) => {
      saveAs(image.url, "image.jpg");
    });
  };

  // for remove posts
  const removepost = async () => {
    let res = removeposts(posts._id, user.token);
    if (res.status === "ok") {
      postBody.current.remove();
    }
  };

  return (
    <>
      <div className="postMenu absolute top-[40px] right-0 w-[300px] z-[1] bg-page_color px-2 py-3 shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] rounded-md">
        {test && <Menuitem icon="pin_icon" title="Pin Post" />}
        <div onClick={() => savePosts()}>
          {checkSavePost ? (
            <Menuitem
              icon="trash_icon"
              title="Unsave Post"
              subtitle="Unsave post to your post item"
            />
          ) : (
            <Menuitem
              icon="save_icon"
              title="Save Post"
              subtitle="Add this to your saved item"
            />
          )}
        </div>
        <div className="w-full h-[1px] bg-line_color my-2"></div>
        {test && <Menuitem icon="edit_icon" title="Edit Post" />}
        {test && (
          <Menuitem img="../../../icons/lock.png" title="Edit Audience" />
        )}
        {images && images.length && (
          <div onClick={() => handleDownload()}>
            <Menuitem icon="download_icon" title="Download" />
          </div>
        )}
        {images && images.length && (
          <Menuitem icon="fullscreen_icon" title="Enter fullscreen" />
        )}
        <Menuitem
          icon="turnOnNotification_icon"
          title="Turn on notification for this post"
        />
        {test && <Menuitem icon="delete_icon" title="Turn off translation" />}
        {test && <Menuitem icon="date_icon" title="Edit Date" />}
        <div className="w-full h-[1px] bg-line_color my-2"></div>
        {test && (
          <Menuitem icon="refresh_icon" title="Refresh date atachment" />
        )}
        {test && <Menuitem icon="archive_icon" title="Move to archive" />}
        {test && (
          <div onClick={() => removepost()}>
            <Menuitem
              icon="trash_icon"
              title="Move to recyclebin"
              subtitle="items your recyclebin are deleted after 30 days"
            />
          </div>
        )}
        {!test && (
          <Menuitem
            img="../../../icons/report.png"
            title="Report Post"
            subtitle="i;m concerned about this post"
          />
        )}
      </div>
    </>
  );
};

export default Menu;
