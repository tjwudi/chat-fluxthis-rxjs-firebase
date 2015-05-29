'use strict';

var React = require('react');

export default React.createClass({
  renderChatItems () {
    return this.props.chats.map((chat) => (
      <li>{chat.get('author')}: {chat.get('content')}</li>
    ));
  },
  render () {
    return (
      <ul>
        {this.renderChatItems()}
      </ul>
    );
  }
});