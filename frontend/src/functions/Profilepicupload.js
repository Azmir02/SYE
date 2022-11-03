import axios from "axios";

export const UploadProfilepicture = async (url, token) => {
  try {
    const { data } = await axios.put(
      "/api/getprofilepicture",
      {
        url,
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
