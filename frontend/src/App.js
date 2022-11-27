import { Routes, Route } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import "./styles/icons/icons.css";
import Loggedinuser from "./Routers/Loggedinuser";
import Activepage from "./pages/Activepage";
import Notloggedin from "./Routers/Notloggedin";
import Finduser from "./pages/resetpass/Finduser";
import axios from "axios";
import Postpopup from "./Component/postpopup/Postpopup";
import Profile from "./pages/Profiles/Profile";
import { useSelector } from "react-redux";
import { getpostreducer } from "./functions/getPost";

function App() {
  const [visible, setVisible] = useState(false);
  const users = useSelector((users) => users.login.loggedin);
  const [{ loading, posts, error }, dispatch] = useReducer(getpostreducer, {
    loading: false,
    posts: [],
    error: "",
  });

  useEffect(() => {
    getPost();
  }, []);

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
    <div>
      {visible && (
        <Postpopup setVisible={setVisible} posts={posts} dispatch={dispatch} />
      )}

      <Routes>
        <Route element={<Loggedinuser />}>
          <Route
            path="/"
            element={
              <Home
                setVisible={setVisible}
                posts={posts}
                user={users}
                getPost={getPost}
              />
            }
          />
          <Route path="/activate/:token" element={<Activepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Route>
        <Route element={<Notloggedin />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/reset" element={<Finduser />} />
      </Routes>
    </div>
  );
}

export default App;
