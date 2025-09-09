export const profileReducer = (state, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: state.posts.length + 1, // генерим новый id
        message: action.message, // текст поста
        likesCount: 0, // у нового поста лайков пока нет
      };

      state.posts.push(newPost); // добавляем пост
      state.newPostText = "";
      return state;
    case "UPDATE-NEW-POST-TEXT":
      {
        state.newPostText = action.message;
      }
      return state;
    default:
      return state;
  }
};
