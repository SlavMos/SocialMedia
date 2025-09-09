import { dialogReducer } from "./dialog-reducer";
import { profileReducer } from "./profile-reducer";

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
      newPostText: "",
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    rerenderEntireTree = observer; // подписка
  },

  dispatch(action) {
    this._state.profileData = profileReducer(this._state.profileData, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    rerenderEntireTree(this._state); // вызываем перерисовку
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
