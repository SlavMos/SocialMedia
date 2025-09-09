export const dialogReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-BODY":
      {
        state.newMessageBody = action.body;
      }
      return state;
    case "SEND_MESSAGE":
      {
        let body = state.newMessageBody; // берем текст из инпута
        if (body.trim() === "") return;
        state.newMessageBody = ""; // очищаем инпут

        state.messagesData.push({
          id: state.messagesData.length + 1, // новый id
          text: body, // сам текст сообщения
        });
      }
      return state;
    default:
      return state;
  }
};
