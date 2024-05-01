const store = {
  todo: [
    {
      task: "Writing essay",
      isCompleted: true,
      id: "todo1",
    },
    {
      task: "Running Marathon",
      isCompleted: false,
      id: "todo2",
    },
  ],
};

function reducer(state = store, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
