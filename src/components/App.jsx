'use strict';

const React = require('react');
const ChatList = require('components/ChatList');
const ChatInput = require('components/ChatInput');

const chatStore = require('stores/chatStore');

export default React.createClass({
  mixins: [chatStore.mixin],
  getStateFromStores() {
    return {
      chats: chatStore.getChats()
    }
  },
  render() {
    return (
      <main>
        <ChatList {...this.state}/>
        <ChatInput {...this.state}/>
      </main>
    );
  }
});
