let rerenderEntireTree = () => {};

let state = {
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Bla" },
      { id: 2, name: "Bla" },
      { id: 3, name: "Bla" },
      { id: 4, name: "Blddddass" },
      { id: 5, name: "Bla" },
      { id: 5, name: "Bla" },
    ],

    messagesData: [
      { id: 1, text: "hello" },
      { id: 2, text: "hello" },
      { id: 3, text: "hello" },
      { id: 4, text: "hello" },
      { id: 5, text: "hello moto" },
      { id: 6, text: "hello moto" },
    ],
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
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 1,
    message: postMessage,
    likesCount: 1,
  };
  state.profileData.posts.push(newPost);
  rerenderEntireTree();
};

export let subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
