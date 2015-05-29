'use strict';

const React = require('react');
const chatActionCreator = require('actions/chatActionCreator');

export default React.createClass({
  getInitialState () {
    return {
      author: '',
      content: ''
    }
  },
  handleChangeContent (e) {
    this.setState({content: e.target.value});
  },
  handleChangeAuthor (e) {
    this.setState({author: e.target.value});
  },
  handleSubmit (e) {
    e.preventDefault();
    chatActionCreator.addChat(this.state.content, this.state.author);
  },
  render () {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" 
            placeholder="Share your thoughts"
            className="form-control"
            value={this.state.content}
            onChange={this.handleChangeContent}/>
        </div>
        <div className="form-group">
          <input type="text" 
            placeholder="Your name"
            className="form-control"
            value={this.state.author}
            onChange={this.handleChangeAuthor}/>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit"/>
        </div>
      </form>
    );
  }
});

