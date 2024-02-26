const initialState = {
  isAuthenticated: false,
  user: null,
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: "",
      };
    default:
      return state;
  }
};

export default authReducer;
