export function getpostreducer(state, action) {
  switch (action.type) {
    case "POSTS_REQUEST":
      return { ...state, loading: true, error: "" };
    case "POSTS_SUCCESS":
      return { ...state, loading: false, posts: action.payload, error: "" };
    case "POSTS_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function getprofilereducer(state, action) {
  switch (action.type) {
    case "PROFILE_REQUEST":
      return { ...state, loading: true, error: "" };
    case "PROFILE_SUCCESS":
      return { ...state, loading: false, profile: action.payload, error: "" };
    case "PROFILE_POSTS":
      return {
        loading: false,
        profile: { ...state.profile, posts: action.payload },
        error: "",
      };
    case "PROFILE_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function getfriendinforeducer(state, action) {
  switch (action.type) {
    case "FRIEND_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FRIEND_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: "" };
    case "FRIEND_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
