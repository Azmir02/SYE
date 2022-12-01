import axios from "axios";

export const addFriend = async (id, token) => {
  try {
    const { data } = await axios.put(
      `/api/addfriend/${id}`,
      {},
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

export const cancelrequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `/api/cancelrequest/${id}`,
      {},
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
export const follow = async (id, token) => {
  try {
    const { data } = await axios.put(
      `/api/follow/${id}`,
      {},
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
export const unfollow = async (id, token) => {
  try {
    const { data } = await axios.put(
      `/api/unfollow/${id}`,
      {},
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

export const acceprequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `/api/acceprequest/${id}`,
      {},
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
export const unfriend = async (id, token) => {
  try {
    const { data } = await axios.put(
      `/api/unfriend/${id}`,
      {},
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
export const deleterequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `/api/deleterequest/${id}`,
      {},
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

export const search = async (searchTerm, token) => {
  try {
    const { data } = await axios.post(
      `/api/search/${searchTerm}`,
      {},
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

export const addsearchHistory = async (searchUser, token) => {
  try {
    const { data } = await axios.put(
      `/api/addsearchhistory`,
      { searchUser },
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

export const getsearchHistory = async (token) => {
  try {
    const { data } = await axios.get(`/api/getsearchhistory`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const removesearchHistory = async (searchUser, token) => {
  try {
    const { data } = await axios.put(
      `/api/removesearchhistory`,
      { searchUser },
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
