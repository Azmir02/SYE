import axios from "axios";

export const uploadIamge = async (formData, path, token) => {
  try {
    const { data } = await axios.post("/api/uploadimage", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    return error.response.data.messasge;
  }
};
