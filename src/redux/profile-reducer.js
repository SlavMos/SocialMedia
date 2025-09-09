const profileReducer = (state, action) => {
  // Добавление поста
  if (action.type === "ADD-POST") {
    let newPost = {
      id: state.posts.length + 1, // генерим новый id
      message: action.message, // текст поста
      likesCount: 0, // у нового поста лайков пока нет
    };

    state.posts.push(newPost); // добавляем пост
  }

  // Обновление текста нового поста (обычно когда печатаем в textarea)
  else if (action.type === "UPDATE-NEW-POST-TEXT") {
    state.newMessageBody = action.body;
  }
  return state;
};
