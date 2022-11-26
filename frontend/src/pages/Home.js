import React, { useEffect, useReducer } from "react";
import Header from "../Component/Header/Header";
import { Helmet } from "react-helmet-async";
import Userleft from "../Component/Lefthome/Userleft";
import Contacts from "../Component/Righthome/Contacts";
import Story from "../Component/Story/Story";
import Post from "../Component/Posts/Post";
import Reauth from "../Component/re-authorization/Reauth";
import axios from "axios";
import { useSelector } from "react-redux";
import Showpost from "../Component/Posts/Showpost";
import { getpostreducer } from "../functions/getPost";

const Home = ({ setVisible }) => {
  const users = useSelector((users) => users.login.loggedin);
  const [{ loading, posts, error }, dispatch] = useReducer(getpostreducer, {
    loading: false,
    posts: [],
    error: "",
  });

  useEffect(() => {
    getPost();
  }, [posts]);

  const getPost = async () => {
    try {
      dispatch({
        type: "POSTS_REQUEST",
      });
      const { data } = await axios.get("/api/getPost", {
        headers: {
          Authorization: `Bearer ${users.token}`,
        },
      });
      dispatch({
        type: "POSTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "POSTS_ERROR",
        payload: error.response.data.message,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>SYE</title>
      </Helmet>

      <Header page="home" />
      <div className="pages">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] xl:grid-cols-[1fr,2fr,1fr] 2xl:grid-cols-[1fr,3fr,1fr] gap-1 xl:gap-2 py-5 pl-1 md:pl-4 mt-[69px]">
          <div className="hidden lg:block">
            <Userleft />
          </div>
          <div className="px-2 md:px-[100px] lg:px-[10px] 2xl:px-[20px] 3xl:px-[200px]">
            <Story />
            <Reauth />
            <Post setVisible={setVisible} />
            {posts.map((item) => (
              <Showpost key={item._id} posts={item} user={users} />
            ))}
          </div>
          <div className="pr-3 hidden xl:block">
            <Contacts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
