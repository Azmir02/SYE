import React, { useState } from "react";
import Menuitem from "./Menuitem";

const Menu = ({ user, posts }) => {
  const [test, setTest] = useState(user.id === posts.user._id ? true : false);
  return (
    <>
      <div className="absolute top-[40px] right-0 w-[300px] z-[1] bg-white px-2 py-3 shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] rounded-md">
        {test && <Menuitem icon="pin_icon" title="Pin Post" />}
        {test && (
          <Menuitem
            icon="save_icon"
            title="Save Post"
            subtitle="Add this to your saved item"
          />
        )}
        <div className="w-full h-[1px] bg-[#E6E8EA] my-2"></div>
        {test && <Menuitem icon="edit_icon" title="Edit Post" />}
        {test && (
          <Menuitem img="../../../icons/lock.png" title="Edit Audience" />
        )}
        {test && <Menuitem icon="download_icon" title="Download" />}
        {test && <Menuitem icon="fullscreen_icon" title="Enter fullscreen" />}
        {test && (
          <Menuitem
            icon="turnOnNotification_icon"
            title="Turn on notification for this post"
          />
        )}
        {test && <Menuitem icon="delete_icon" title="Turn off translation" />}
        {test && <Menuitem icon="date_icon" title="Edit Date" />}
        <div className="w-full h-[1px] bg-[#E6E8EA] my-2"></div>
        {test && (
          <Menuitem icon="refresh_icon" title="Refresh date atachment" />
        )}
        {test && <Menuitem icon="archive_icon" title="Move to archive" />}
        {test && (
          <Menuitem
            icon="trash_icon"
            title="Move to recyclebin"
            subtitle="items your recyclebin are deleted after 30 days"
          />
        )}
      </div>
    </>
  );
};

export default Menu;