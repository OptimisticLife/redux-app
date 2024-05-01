const store = {
  theme: "",
};

export const UPDATE_THEME = "UPDATE_THEME";

function reducer(state = store, action) {
  switch (action.type) {
    case UPDATE_THEME: {
      const newState = { ...state };
      newState.theme = action.theme;
      return newState;
    }
    default:
      return state;
  }
}

export default reducer;
