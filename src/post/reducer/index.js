const store = {
  post: [
    {
      title: "impossible Task",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "2nd June 97",
      id: "post1",
    },
    {
      title: "Magic Melon",
      desc: "Lorem Ipsum is simply typesetting industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "2nd Aug 98",
      id: "post2",
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
