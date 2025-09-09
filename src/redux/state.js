let rerenderEntireTree = () => {
  console.log("State changed");
};

let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Bla" },
        { id: 2, name: "Bla" },
        { id: 3, name: "Bla" },
        { id: 4, name: "Blddddass" },
        { id: 5, name: "Bla" },
        { id: 6, name: "Bla" },
      ],

      messagesData: [
        { id: 1, text: "hello" },
        { id: 2, text: "hello" },
        { id: 3, text: "hello" },
        { id: 4, text: "hello" },
        { id: 5, text: "hello moto" },
        { id: 6, text: "hello moto" },
      ],
      newMessageBody: "",
    },

    profileData: {
      posts: [
        { id: 1, message: "hello", likesCount: 1 },
        { id: 2, message: "hello", likesCount: 2 },
        { id: 3, message: "hello", likesCount: 3 },
        { id: 4, message: "hello", likesCount: 4 },
        { id: 5, message: "hello", likesCount: 5 },
      ],
    },
    newPostText: "",
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    rerenderEntireTree = observer; // подписка
  },

  dispatch(action) {
    // Добавление поста
    if (action.type === "ADD-POST") {
      let newPost = {
        id: this._state.profileData.posts.length + 1, // генерим новый id
        message: action.message, // текст поста
        likesCount: 0, // у нового поста лайков пока нет
      };

      this._state.profileData.posts.push(newPost); // добавляем пост
      rerenderEntireTree(this._state); // перерисовываем UI
    }

    // Обновление текста нового поста (обычно когда печатаем в textarea)
    else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.dialogsPage.newMessageBody = action.body;
      rerenderEntireTree(this._state);
    }

    // Обновление текста нового сообщения (печатаем в инпуте сообщений)
    else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
      this._state.dialogsPage.newMessageBody = action.body;
      rerenderEntireTree(this._state);
    }

    // Отправка нового сообщения
    else if (action.type === "SEND_MESSAGE") {
      let body = this._state.dialogsPage.newMessageBody; // берем текст из инпута
      if (body.trim() === "") return;
      this._state.dialogsPage.newMessageBody = ""; // очищаем инпут

      this._state.dialogsPage.messagesData.push({
        id: this._state.dialogsPage.messagesData.length + 1, // новый id
        text: body, // сам текст сообщения
      });

      rerenderEntireTree(this._state); // обновляем UI
    }
  },
};
export let addPostActionCreate = (text) => {
  return {
    type: "ADD-POST",
    message: text,
  };
};
export let sendMessageCreate = () => {
  return {
    type: "SEND_MESSAGE",
  };
};
export let updateNewMessageBodyCreator = (body) => {
  return {
    type: "UPDATE-NEW-MESSAGE-BODY",
    body: body,
  };
};

export default store;
