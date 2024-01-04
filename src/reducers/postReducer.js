export const postReducer = (posts, action) => {
  switch (action.type) {
    case "add":
      return [
        ...posts,
        {
          id: posts.length,
          title: action.payload.title,
          text: action.payload.text,
        },
      ];

    case "remove":
      return posts.filter((item) => item.id !== action.payload.id);

    default:
      return posts;
  }
};
