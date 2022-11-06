import axios from "axios";

export const UploadCoverpicture = async (url, token) => {
  try {
    const { data } = await axios.put(
      "/api/getcoverpicture",
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
