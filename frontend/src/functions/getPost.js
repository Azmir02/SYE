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
    case "PROFILE_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// export function imagereducer(state, action) {
//   switch (action.type) {
//     case "PHOTO_REQUEST":
//       return { ...state, loading: true, error: "" };
//     case "PHOTO_SUCCESS":
//       return { ...state, loading: false, photo: action.payload, error: "" };
//     case "PHOTO_ERROR":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// }
