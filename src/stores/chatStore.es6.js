'use strict';

const ImmutableStore = require('fluxthis/src/ImmutableStore');
const ACTION_TYPES = require('constants/ActionTypes');
const Immutable = ImmutableStore.Immutable;

export default new ImmutableStore({
	displayName: 'chatStore',
	init () {
		this.chats = Immutable.List();
		this.bindActions(
			ACTION_TYPES.ADD_CHAT_PENDING, this.addChatPending,
			ACTION_TYPES.ADD_CHAT_SUCCESS, this.addChatSuccess,
			ACTION_TYPES.ADD_CHAT_FAILED , this.addChatFailed
		)
	},
	public: {
		getChats () {
			return this.chats;
		}
	},
	private: {
		addChatPending () {
			console.log('addChatPending');
		},
		addChatSuccess (payload) {
			this.chats = this.chats.push(Immutable.fromJS({
				content: payload.content,
				author: payload.author,
				createdAt: Date.now()
			}));
		},
		addChatFailed () {
			console.log('addChatFailed');
		}
	}
});