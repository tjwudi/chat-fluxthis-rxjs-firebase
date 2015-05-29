const dbRef = require('lib/db');

export default {
  addChat: (content, author) => {
    dbRef.push({ content, author }, (err) => {
      if (err) {
        chatActionCreator.addChatFailed();
      }
    });
  }
};