'use strict';

const ActionCreator = require('fluxthis/src/ActionCreator');
const ACTION_SOURCES = require('constants/ActionSources');
const ACTION_TYPES = require('constants/ActionTypes');

const chatStream = require('streams/remote/chatStream');
const chatRemote = require('remote/chatRemote');

let chatActionCreator = new ActionCreator({
  displayName: 'chatActionCreator',
  addChat: {
    type: ACTION_TYPES.ADD_CHAT_PENDING,
    payload: null,
    createPayload: (...args) => chatRemote.addChat(...args)
  },

  addChatSucceeded: {
    type: ACTION_TYPES.ADD_CHAT_SUCCESS,
    payload: ActionCreator.PayloadTypes.shape({
      content: ActionCreator.PayloadTypes.string.isRequired,
      author: ActionCreator.PayloadTypes.string.isRequired
    }).isRequired,
  },

  addChatFailed: {
    type: ACTION_TYPES.ADD_CHAT_FAILED,
    payload: null
  }
});

chatStream.subscribe(chat => chatActionCreator.addChatSucceeded(chat));

export default chatActionCreator;