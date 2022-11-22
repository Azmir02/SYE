import axios from "axios";

export const reactPosts = async (postId, react, token) => {
  try {
    const { data } = await axios.put(
      "/api/reactPost",
      {
        postId,
        react,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "done";
  } catch (error) {
    return error.response.data.messasge;
  }
};
export const getreactPosts = async (postId, token) => {
  try {
    const { data } = await axios.get(`/api/getreactPost/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.response.data.messasge;
  }
};
