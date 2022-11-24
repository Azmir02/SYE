import axios from "axios";

export const createPost = async (
  type,
  images,
  text,
  background,
  user,
  token
) => {
  try {
    const { data } = await axios.post(
      "/api/createPost",
      {
        type,
        images,
        text,
        background,
        user,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "done";
  } catch (error) {
    return error.response.data.message;
  }
};

export const createComment = async (postId, comment, image, token) => {
  try {
    const { data } = await axios.put(
      "/api/comment",
      {
        postId,
        comment,
        image,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
