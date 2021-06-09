import React from 'react';
import MessageFormContainer from './message_form_container';
import Message from './message';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
    this.subscription = App.cable.subscriptions.create({ 
        channel: "ChatChannel",
        type: this.props.chatType,
        chatId: this.props.chat.id
      },
      {
        received: data => {
          switch (data.type) {
            case "receive_message":
              this.props.receiveMessage(data.message);
            break;
            case "receive_messages":
              this.props.receiveChannelMessages(data.messages);
              break;
          }
        },
        speak: data => {
          return this.subscription.perform("speak", data);
        },
      }
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }

  componentWillUnmount() {
    App.cable.subscriptions.remove(this.subscription);
  }

  render() {
    let messageList;
    if (Object.keys(this.props.users).length) {
      messageList = (this.props.messages.length) ?
        this.props.messages.map(message => {
            return <Message 
              key={message.id}
              message={message}
              username={this.props.users[message.authorId].username}
              bottom={this.bottom}
            />
        }) : (
          <div className=''>
            <h1>Welcome to {this.props.chat.name}!</h1>
          </div>
        )
    } else {
      return <div className=''>Loading...</div>
    }

    return (
      <div className=''>
        <div className=''>
          {messageList}
        </div>
        <MessageFormContainer 
          subscription={this.subscription} />
      </div>
    )
  } 
}

export default ChatRoom; 