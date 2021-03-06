import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
  }
  
  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body, author_id: this.props.currentUserId, channel_id: this.props.channelId });
    this.setState({ body: "" });
  }
  
  render() {
    return (
      <div>
        <form className='message-form' onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Message #Channel"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default MessageForm;