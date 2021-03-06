import React from "react";
import MessageForm from "./message_form.js";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
  }
  
  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: this.props.channelId },
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data.message)
          });
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );
  }
  
  componentDidUpdate() {
    // this.bottom.current.scrollIntoView();
  }
  
  render() {
    const messageList = this.state.messages.map(message => {
      return (
        <li key={message.id}>
          {message.body} 
          <div ref={this.bottom} />
        </li>
      );
    });
    return (
      <div className="chatroom-container">
        <div className='channel-name'># Channel Name</div>
        <div className="message-list">{messageList}</div>
        <MessageForm currentUserId={this.props.currentUserId} channelId={this.props.channelId} />
      </div>
    );
  }
}

export default ChatRoom;