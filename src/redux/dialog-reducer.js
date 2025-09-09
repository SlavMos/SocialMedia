export const dialogReducer = (state, action) => {
  // Обновление текста нового сообщения (печатаем в инпуте сообщений)
  if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
    state.newMessageBody = action.body;
  }

  // Отправка нового сообщения
  else if (action.type === "SEND_MESSAGE") {
    let body = state.newMessageBody; // берем текст из инпута
    if (body.trim() === "") return;
    state.newMessageBody = ""; // очищаем инпут

    state.messagesData.push({
      id: state.messagesData.length + 1, // новый id
      text: body, // сам текст сообщения
    });
  }
  return state;
};
